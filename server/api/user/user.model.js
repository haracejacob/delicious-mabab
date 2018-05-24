import crypto from 'crypto';

const validatePresenceOf = value => (value && value.length)

export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'The specified email address is already in use.'
      },
      validate: {
        isEmail: true
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    salt: DataTypes.STRING

  }, {
    tableName: 'user',
    comment: '회원',
    classMethods: {
      associate: () => {
      }
    },

    /**
     * Virtual Getters
     */
    getterMethods: {
      // Public profile information
      profile() {
        return {
          name: this.name,
          role: this.role
        };
      },

      // Non-sensitive info we'll be putting in the token
      token() {
        return {
          _id: this._id,
          role: this.role
        };
      }
    },

    hooks: {
      beforeBulkCreate(users, fields, fn) {
        var totalUpdated = 0;
        users.forEach(user => {
          user.updatePassword()
          .then(() => {
            totalUpdated += 1;
            if (totalUpdated === users.length) {
              return fn();
            }
          })
          .catch(err => fn(err))
        });
      },
      beforeCreate(user, fields, fn) {
        user.updatePassword()
        .then(() => fn())
        .catch(err => fn(err))
      },
      beforeUpdate(user, fields, fn) {
        if (user.changed('password')) {
          user.updatePassword()
          .then(() => fn())
          .catch(err => fn(err))
        }
        fn();
      }
    },

    /**
     * Instance Methods
     */
    instanceMethods: {
      /**
       * Authenticate - check if the passwords are the same
       *
       * @param {String} password
       * @param {Function} callback
       * @return {Boolean}
       * @api public
       */
      authenticate(password) {
        return new Promise(async (resolve, reject) => {
          try {
            const pwdGen = await this.encryptPassword(password)

            if (this.password === pwdGen) {
              resolve(true)
            } else {
              resolve(false)
            }
          } catch (err) {
            reject(err)
          }
        })
      },

      /**
       * Make salt
       *
       * @param {Number} [byteSize] - Optional salt byte size, default to 16
       * @param {Function} callback
       * @return {String}
       * @api public
       */
      makeSalt(byteSize = 16) {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(byteSize, (err, salt) => {
            if (err) {
              reject(err)
            }

            resolve(salt.toString('base64'))
          })
        })
      },

      /**
       * Encrypt password
       *
       * @param {String} password
       * @param {Function} callback
       * @return {String}
       * @api public
       */
      encryptPassword(password) {
        return new Promise((resolve, reject) => {
          if (!password || !this.salt) {
            reject('password or salt is not exists')
          }

          const defaultIterations = 10000
          const defaultKeyLength = 64
          const salt = new Buffer(this.salt, 'base64')

          const encryptPassword = crypto.pbkdf2Sync(password, salt, defaultIterations, defaultKeyLength, 'sha512').toString('base64')
          resolve(encryptPassword)
        })
      },

      /**
       * Update password field
       *
       * @param {Function} fn
       * @return {String}
       * @api public
       */
      updatePassword() {
        return new Promise(async (resolve, reject) => {
          if (!this.password) {
            reject('password is not exists')
          }

          if (!validatePresenceOf(this.password)) {
            reject('Invalid password')
          }
          try {
            const salt = await this.makeSalt()
            this.salt = salt
            const hashedPassword = await this.encryptPassword(this.password)
            this.password = hashedPassword

            resolve('done')
          } catch (err) {
            reject(err)
          }
        })
      }
    }
  });

  return User;
}

import path from 'path'

// Development specific configuration
// ==================================
export default {
  uploadPath: path.join(__dirname, '../../.tmp'),
  // Sequelize connection opions
  sequelize: {
    database: 'dev_mabab',
    username: 'devmabab',
    password: 'devmabab',
    options: {
      host: 'localhost',
      dialect: 'mysql',
      define: {
        insecureAuth: true,
        timestamps: true,
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  }
}

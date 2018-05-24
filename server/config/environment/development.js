// Development specific configuration
// ==================================
export default {
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
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  }
}

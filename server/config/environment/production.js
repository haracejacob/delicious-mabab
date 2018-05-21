'use strict';
/*eslint no-process-env:0*/

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP
    || process.env.ip
    || undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT
    || process.env.PORT
    || 8080,

  sequelize: {
    databas: 'dev-mabab',
    username: 'dev-mabab',
    password: 'dev-mabab',
    options: {
      host: process.env.SEQUELIZE_URI || 'localhost',
      dialect: 'mysql',
      logging: true,
      define: {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  }
};

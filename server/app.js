import express from 'express'
import http from 'http'
import db from './config/db'
import config from './config/environment'

const app = express();
const server = http.createServer(app)
require('./config/express').default(app)
require('./routes').default(app)

// Start server
function startServer() {
  app.deliciousMabab = server.listen(config.port, config.ip, () => {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

db.sequelize.sync()
  .then(startServer)
  .catch(err => {
    console.log('Server failed to start due to error: %s', err);
  });

export default app

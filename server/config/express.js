import bodyParser from 'body-parser'
import errorHandler from 'errorhandler'
import express from 'express'
import ejs from 'ejs'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import passport from 'passport'
import session from 'express-session'
import expressSequelizeSession from 'express-sequelize-session'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config'
const compiler = webpack(webpackConfig)

import config from './environment'
import db from './db'
const Store = expressSequelizeSession(session.Store);

export default app => {
  const env = app.get('env');

  app.set('appPath', path.join(config.root, 'client'));
  app.use(express.static(app.get('appPath')));
  app.use(logger('dev'));

  // view engine setup
  app.set('views', path.join(config.root, 'server', 'views'));
  app.engine('html', ejs.renderFile);
  app.set('view engine', 'html');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(passport.initialize());

  // Persist sessions with sequelizeStore
  // We need to enable sessions for passport-twitter because it's an
  // oauth 1.0 strategy, and Lusca depends on sessions
  app.use(session({
    secret: config.secrets.session,
    saveUninitialized: true,
    resave: false,
    store: new Store(db.sequelize)
  }));

  if (env === 'development' || env === 'test') {
    app.use(webpackDevMiddleware(compiler, {
      noInfo: false,
      stats: {
        colors: true,
        timings: true,
        chunks: false
      }
    }))

    app.use(errorHandler()); // Error handler - has to be last
  }
}

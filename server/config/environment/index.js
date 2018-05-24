import path from 'path'
import _ from 'lodash'

import development from './development'

const environment = {
  development
}

const all = {
  env: process.env.NODE_ENV || 'development',
  root: path.normalize(`${__dirname}/../../..`),
  // Server port
  port: process.env.PORT || 9000,
  // Server IP
  ip: process.env.IP || '127.0.0.1',
  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'test-secret'
  },
  userRoles: ['guest', 'user', 'admin']
}


export default _.merge(
  all,
  environment[all.env]
)

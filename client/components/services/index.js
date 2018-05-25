import UserService from './user.service'
import AuthService from '../auth/auth.service'

export default angular
  .module('deliciousMababApp.services', [])
  .factory('UserService', UserService)
  .service('AuthService', AuthService)
  .name

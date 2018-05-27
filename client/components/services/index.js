import ngMaterial from 'angular-material'

import UserService from './user.service'
import CategoryService from './category.service'
import MenuService from './menu.service'
import ReservationService from './reservation.service'
import ReservationMenuService from './reservationMenu.service'
import AuthService from './auth.service'
import AlertService from './alert.service'

export default angular
  .module('deliciousMababApp.services', [ngMaterial])
  .factory('UserService', UserService)
  .factory('CategoryService', CategoryService)
  .factory('MenuService', MenuService)
  .factory('ReservationService', ReservationService)
  .factory('ReservationMenuService', ReservationMenuService)
  .service('AuthService', AuthService)
  .service('AlertService', AlertService)
  .name

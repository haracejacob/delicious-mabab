import uiRouter from 'angular-ui-router'
import routing from './menu.routes'
import template from './menu.html'

export class MenuController {
  /*@ngInject*/
  constructor($scope, $state, AuthService, AlertService, MenuService, ReservationService) {
    this.$scope = $scope
    this.$state = $state
    this.AuthService = AuthService
    this.AlertService = AlertService
    this.MenuService = MenuService
    this.ReservationService = ReservationService
    this.menus = []

    this.reservation = {
      reservationMenu: [],
      amount: 0,
      additionalNotice: ''
    }
  }

  async $onInit() {
    this.currentUser = await this.AuthService.getCurrentUser()
    this.reservation.userId = this.currentUser.id

    this.menus = await this.MenuService.query().$promise
    this.$scope.$apply()

    this.$scope.$watch('$ctrl.reservation.reservationMenu', () => {
      this.reservation.reservationMenu.length

      if (this.reservation.reservationMenu.length > 0) {
        let sum = 0
        this.reservation.reservationMenu.forEach(val => {
          sum += val.price * val.count
        })
        this.reservation.amount = sum
      }
    })
  }

  add(menu) {
    const reservationMenu = this.reservation.reservationMenu.filter(val => val.menuId === menu.id)

    if (reservationMenu.length > 0) {
      this.reservation.reservationMenu = this.reservation.reservationMenu.map(val => {
        if (val.menuId === menu.id) {
          val.count += 1
        }
        return val
      })
    } else {
      this.reservation.reservationMenu.push({
        menuId: menu.id,
        name: menu.name,
        price: menu.price,
        count: 1
      })
    }
  }

  minus(menuId) {
    this.reservation.reservationMenu = this.reservation.reservationMenu.map(val => {
      if (val.menuId === menuId) {
        val.count -= 1
        if (val.count > 0) {
          return val
        }
      } else {
        return val
      }
    })

    this.reservation.reservationMenu = this.reservation.reservationMenu.filter(val => val)
  }

  plus(menuId) {
    this.reservation.reservationMenu = this.reservation.reservationMenu.map(val => {
      if (val.menuId === menuId) {
        val.count += 1
      }
      return val
    })
  }

  async order() {
    await this.ReservationService.save(this.reservation).$promise
    this.AlertService.alert('Success', '예약에 성공하였습니다!')
    this.$state.go('main')
  }
}

export default angular.module('deliciousMababApp.menu', [uiRouter])
  .config(routing)
  .component('menu', {
    template,
    controller: MenuController
  })
  .name

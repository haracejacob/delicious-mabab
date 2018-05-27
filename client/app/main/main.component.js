import uiRouter from 'angular-ui-router'
import routing from './main.routes'
import template from './main.html'

import { MainDetailController } from './main.detail.component'
import MainDetailPage from './main.detail.html'

import moment from 'moment'

export class MainController {
  /*@ngInject*/
  constructor($scope, $uibModal, AuthService, AlertService, ReservationService, MenuService) {
    this.$scope = $scope
    this.$uibModal = $uibModal
    this.AuthService = AuthService
    this.AlertService = AlertService
    this.ReservationService = ReservationService
    this.MenuService = MenuService
    this.reservationMenu = []
    this.sumaryReservation = []
  }

  async $onInit() {
    this.currentUser = await this.AuthService.getCurrentUser()
    this.reservations = await this.ReservationService.query({ userId: this.currentUser.id }).$promise

    this.sumaryReservation = this.reservations.map(val => {
      val.numProduct = 0
      val.reservationMenus = val.reservationMenus.forEach(menuVal => {
        val.numProduct += menuVal.count
      })
      return {
        createdAt: moment(val.createdAt).format('YYYY-MM-DD HH:mm:ss'),
        amount: val.amount,
        numProduct: val.numProduct,
        status: val.status,
        reservation: val
      }
    })
    this.$scope.$apply()
  }

  openMainDetailModal(reservation) {
    this.$uibModal.open({
      template: MainDetailPage,
      size: 'md',
      controller: MainDetailController,
      controllerAs: '$ctrl',
      resolve: {
        reservation: () => reservation
      }
    }).result
      .then(() => { }).catch(() => { })
  }
}

export default angular.module('deliciousMababApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template,
    controller: MainController
  })
  .name

import uiRouter from 'angular-ui-router'
import routing from './adReservationUpdate.routes'
import template from './adReservationUpdate.html'

export class AdminReservationUpdateController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminReservationUpdateController')
  }
}

export default angular.module('deliciousMababApp.adReservationUpdate', [uiRouter])
  .config(routing)
  .component('adReservationUpdate', {
    template,
    controller: AdminReservationUpdateController
  })
  .name

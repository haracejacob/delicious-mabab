import uiRouter from 'angular-ui-router'
import routing from './reservationInsert.routes'
import template from './reservationInsert.html'

export class ReservationInsertController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('ReservationInsertController')
  }
}

export default angular.module('deliciousMababApp.reservationInsert', [uiRouter])
  .config(routing)
  .component('reservation', {
    template,
    controller: ReservationInsertController
  })
  .name

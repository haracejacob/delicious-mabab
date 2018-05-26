import uiRouter from 'angular-ui-router'
import routing from './reservation.routes'
import template from './reservation.html'

import reservationInsert from './reservationInsert/reservationInsert.component'


export class ReservationController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminReservationInsertController')
  }
}

export default angular.module('deliciousMababApp.reservation', [uiRouter, reservationInsert])
  .config(routing)
  .component('reservation', {
    template,
    controller: ReservationController
  })
  .name

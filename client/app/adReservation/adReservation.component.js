import uiRouter from 'angular-ui-router'
import routing from './adReservation.routes'
import template from './adReservation.html'

import adReservationInsert from './adReservationInsert/adReservationInsert.component'
import adReservationUpdate from './adReservationUpdate/adReservationUpdate.component'

export class AdminReservationController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminReservationInsertController')
  }
}

export default angular.module('deliciousMababApp.adReservation', [uiRouter, adReservationInsert, adReservationUpdate])
  .config(routing)
  .component('adReservation', {
    template,
    controller: AdminReservationController
  })
  .name

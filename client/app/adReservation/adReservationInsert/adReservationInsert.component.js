import uiRouter from 'angular-ui-router'
import routing from './adReservationInsert.routes'
import template from './adReservationInsert.html'

export class AdminReservationInsertController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminReservationInsertController')
  }
}

export default angular.module('deliciousMababApp.adReservationInsert', [uiRouter])
  .config(routing)
  .component('adReservationInsert', {
    template,
    controller: AdminReservationInsertController
  })
  .name

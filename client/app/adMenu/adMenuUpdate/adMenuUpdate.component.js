import uiRouter from 'angular-ui-router'
import routing from './adMenuUpdate.routes'
import template from './adMenuUpdate.html'

export class AdminMenuUpdateController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminMenuUpdateController')
  }
}

export default angular.module('deliciousMababApp.adMenuUpdate', [uiRouter])
  .config(routing)
  .component('adMenuUpdate', {
    template,
    controller: AdminMenuUpdateController
  })
  .name

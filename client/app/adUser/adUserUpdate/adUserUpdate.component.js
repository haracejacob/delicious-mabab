import uiRouter from 'angular-ui-router'
import routing from './adUserUpdate.routes'
import template from './adUserUpdate.html'

export class AdminUserUpdateController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminUserUpdateController')
  }
}

export default angular.module('deliciousMababApp.adUserUpdate', [uiRouter])
  .config(routing)
  .component('adUserUpdate', {
    template,
    controller: AdminUserUpdateController
  })
  .name

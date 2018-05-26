import uiRouter from 'angular-ui-router'
import routing from './adUser.routes'
import template from './adUser.html'

import adUserInsert from './adUserInsert/adUserInsert.component'
import adUserUpdate from './adUserUpdate/adUserUpdate.component'

export class AdminUserController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminUserController')
  }
}

export default angular.module('deliciousMababApp.adUser', [uiRouter, adUserInsert, adUserUpdate])
  .config(routing)
  .component('adUser', {
    template,
    controller: AdminUserController
  })
  .name

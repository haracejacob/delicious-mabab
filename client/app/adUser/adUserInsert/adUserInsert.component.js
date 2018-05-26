import uiRouter from 'angular-ui-router'
import routing from './adUserInsert.routes'
import template from './adUserInsert.html'

export class AdminUserInsertController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminUserInsertController')
  }
}

export default angular.module('deliciousMababApp.adUserInsert', [uiRouter])
  .config(routing)
  .component('adUserInsert', {
    template,
    controller: AdminUserInsertController
  })
  .name

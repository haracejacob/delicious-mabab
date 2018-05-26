import uiRouter from 'angular-ui-router'
import routing from './adMenuInsert.routes'
import template from './adMenuInsert.html'

export class AdminMenuInsertController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminMenuInsertController')
  }
}

export default angular.module('deliciousMababApp.adMenuInsert', [uiRouter])
  .config(routing)
  .component('adMenuInsert', {
    template,
    controller: AdminMenuInsertController
  })
  .name

import uiRouter from 'angular-ui-router'
import routing from './adMenu.routes'
import template from './adMenu.html'

import adMenuInsert from './adMenuInsert/adMenuInsert.component'
import adMenuUpdate from './adMenuUpdate/adMenuUpdate.component'

export class AdminMenuController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('AdminMenuController')
  }
}

export default angular.module('deliciousMababApp.adMenu', [uiRouter, adMenuInsert, adMenuUpdate])
  .config(routing)
  .component('adMenu', {
    template,
    controller: AdminMenuController
  })
  .name

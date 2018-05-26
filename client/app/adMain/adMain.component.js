import uiRouter from 'angular-ui-router'
import routing from './adMain.routes'
import template from './adMain.html'

export class AdminMainController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('admin main')
  }
}

export default angular.module('deliciousMababApp.adMain', [uiRouter])
  .config(routing)
  .component('adMain', {
    template,
    controller: AdminMainController
  })
  .name

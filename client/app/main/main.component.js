import uiRouter from 'angular-ui-router'
import routing from './main.routes'
import template from './main.html'

export class MainController {
  /*@ngInject*/
  constructor($state, $http, $resource, AuthService) {
    this.$http = $http
    this.$resource = $resource
    this.AuthService = AuthService
    this.$state = $state
  }

  async $onInit() {
  }
}

export default angular.module('deliciousMababApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template,
    controller: MainController
  })
  .name

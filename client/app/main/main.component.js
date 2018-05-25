import uiRouter from 'angular-ui-router'
import routing from './main.routes'
import template from './main.html'

export class MainController {
  /*@ngInject*/
  constructor($http, $resource, AuthService) {
    this.$http = $http
    this.$resource = $resource
    this.AuthService = AuthService
  }

  async $onInit() {
    console.log(await this.AuthService.getCurrentUser())
    console.log(await this.AuthService.isLoggedIn())
    console.log(this.AuthService.getToken())
  }
}

export default angular.module('deliciousMababApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template,
    controller: MainController
  })
  .name

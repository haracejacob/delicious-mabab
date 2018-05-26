import uiRouter from 'angular-ui-router'
import routing from './main.routes'
import template from './main.html'

export class MainController {
  /*@ngInject*/
  constructor(AuthService, AlertService) {
    this.AuthService = AuthService
    this.AlertService = AlertService
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

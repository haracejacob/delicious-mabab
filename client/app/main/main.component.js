import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routing from './main.routes'
import template from './main.html'

export class MainController {

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
  }
}

export default angular.module('deliciousMababApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template,
    controller: MainController
  })
  .name;

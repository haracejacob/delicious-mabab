import uiRouter from 'angular-ui-router'
import routing from './menu.routes'
import template from './menu.html'

export class MenuController {
  /*@ngInject*/
  constructor($http, $resource) {
    this.$http = $http
    this.$resource = $resource
  }

  async $onInit() {
    console.log('MenuController')
  }

  test(){
    console.log("hey")
    $ctrl.count[0]=$ctrl.count[0]-1
  }
}

export default angular.module('deliciousMababApp.menu', [uiRouter])
  .config(routing)
  .component('menu', {
    template,
    controller: MenuController
  })
  .name

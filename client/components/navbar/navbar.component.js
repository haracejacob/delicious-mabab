import angular from 'angular'
import template from './navbar.html'

export class NavbarComponent {
  constructor() {
    'ngInject'

  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template,
    controller: NavbarComponent
  })
  .name;

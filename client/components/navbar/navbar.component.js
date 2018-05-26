import template from './navbar.html'

export class NavbarComponent {
  constructor() {
    'ngInject'
  }

  async $onInit() {
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template,
    controller: NavbarComponent
  })
  .name;

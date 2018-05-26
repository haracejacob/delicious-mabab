import template from './navbar.html'

export class NavbarComponent {
  constructor($state) {
    'ngInject'
    this.$state = $state
    this.disabled = true
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

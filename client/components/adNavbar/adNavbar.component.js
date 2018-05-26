import template from './adNavbar.html'

export class NavbarComponent {
  constructor() {
    'ngInject'

  }

}

export default angular.module('directives.adNavbar', [])
  .component('adNavbar', {
    template,
    controller: NavbarComponent
  })
  .name;

import template from './adNavbar.html'

export class AdNavbarComponent {
  constructor() {
    'ngInject'

  }

}

export default angular.module('directives.adNavbar', [])
  .component('adNavbar', {
    template,
    controller: AdNavbarComponent
  })
  .name;

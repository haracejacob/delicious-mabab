import template from './adSidebar.html'

export class AdSidebarComponent {
  constructor() {
    'ngInject'

  }

}

export default angular.module('directives.adSidebar', [])
  .component('adSidebar', {
    template,
    controller: AdSidebarComponent
  })
  .name;

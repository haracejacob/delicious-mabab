import template from './status.html'

export class StatusComponent {
  constructor() {
    'ngInject'

  }

}

export default angular.module('directives.navbar', [])
  .component('status', {
    template,
    controller: StatusComponent
  })
  .name;

import template from './footer.html'
export class FooterComponent {}

export default angular.module('directives.footer', [])
  .component('footer', {
    template,
    controller: FooterComponent
  })
  .name

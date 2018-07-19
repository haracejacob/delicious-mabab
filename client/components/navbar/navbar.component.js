import template from './navbar.html'

export class NavbarComponent {
  constructor(AuthService) {
    'ngInject'

    this.AuthService = AuthService
    this.isAdmin = false
  }

  async $onInit() {
    this.isAdmin = await this.AuthService.hasRole('admin')
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template,
    controller: NavbarComponent
  })
  .name;

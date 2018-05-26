import routing from './login.routes'
import template from './login.html'

export class LoginComponent {
  /*@ngInject*/
  constructor($state, AuthService) {
    this.$state = $state
    this.AuthService = AuthService

    this.email = ''
    this.password = ''
    this.submitted = false

    // login validation
    this.AuthService.isLoggedIn().then(res => {
      if (res) {
        this.$state.go('main')
      }
    })
  }

  login(form) {
    this.submitted = true;
    if (form.$valid) {
      this.AuthService.login({
        email: this.email,
        password: this.password
      })
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          this.errors.login = err.message;
        });
    }
  }
}


export default angular.module('deliciousMababApp.login', [])
  .config(routing)
  .component('login', {
    template,
    controller: LoginComponent,
    controllerAs: '$ctrl',
  })
  .name

import routing from './login.routes'
import template from './login.html'

export class LoginComponent {
  errors = {
    login: undefined
  };
  submitted = false;


  /*@ngInject*/
  constructor($state, AuthService) {
    this.$state = $state
    this.AuthService = AuthService

    this.name = 'test'
    this.email = 'test@test.com'
    this.password = 'password'
  }

  login(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
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

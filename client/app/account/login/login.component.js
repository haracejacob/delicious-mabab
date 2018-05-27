import routing from './login.routes'
import template from './login.html'

export class LoginComponent {
  /*@ngInject*/
  constructor($state, AuthService, AlertService) {
    this.$state = $state
    this.AuthService = AuthService
    this.AlertService = AlertService

    this.email = ''
    this.password = ''
  }
  validation(form) {
    if (form.$invalid) {
      if (form.$error.required) {
        return '데이터 입력해 주십시오.'
      }
      return '데이터가 올바르지 않습니다.'
    }
    return ''
  }

  login(form) {
    const msg = this.validation(form)
    if (msg === '') {
      this.AuthService.login({
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$state.go('main');
        })
        .catch(err => {
          this.AlertService.alert('Error', err.message)
          this.errors.login = err.message

          this.email = ''
          this.password = ''
        });
    } else {
      this.AlertService.alert('Error', msg)
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

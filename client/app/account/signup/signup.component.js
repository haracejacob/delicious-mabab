import routing from './signup.routes'
import template from './signup.html'

export class SignupComponent {
  /*@ngInject*/
  constructor($state, AuthService, AlertService) {
    this.$state = $state
    this.AuthService = AuthService
    this.AlertService = AlertService
    this.name = ''
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
    if (this.password !== this.confirmPassword) {
      return '비밀번호와 재입력 비밀번호가 일치하지 않습니다.'
    }
    return ''
  }

  register(form) {
    const msg = this.validation(form)

    if (msg === '') {
      this.AuthService.createUser({
        name: this.name,
        email: this.email,
        password: this.password
      }).then(() => {
        this.AlertService.alert('Congratulation!', '회원가입을 축하합니다!')
        this.$state.go('main')
      }).catch(err => {
        this.AlertService.alert('Error', err.msg)
      })
    } else {
      this.AlertService.alert('Error', msg)
    }
  }
}

export default angular.module('deliciousMababApp.signup', [])
  .config(routing)
  .component('signup', {
    template,
    controller: SignupComponent,
    controllerAs: '$ctrl'
  })
  .name;

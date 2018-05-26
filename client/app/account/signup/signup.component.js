import routing from './signup.routes'
import template from './signup.html'

export class SignupComponent {
  /*@ngInject*/
  constructor($state, AuthService) {
    this.$state = $state
    this.AuthService = AuthService
    this.name = 'test'
    this.email = 'test@test.com'
    this.password = 'password'
    this.submitted = false

    // login validation
    this.AuthService.isLoggedIn().then(res => {
      if (res) {
        this.$state.go('main')
      }
    })
  }

  register(form) {
    this.submitted = true
    if (form.$valid) {
      console.log(form)
      if (this.password !== this.confirmPassword) {
        alert('Passwords must match.')
        return
      }

      this.AuthService.createUser({
        name: this.name,
        email: this.email,
        password: this.password
      }).then(res => {
        alert('회원가입을 축하합니다! 메인화면으로 이동합니다.')
        this.$state.go('main')
      }).catch(err => {
        console.log(err)
        alert('에러가 발생했습니다. 관리자에게 문의해 주십시오')
      })
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

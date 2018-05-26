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

    this.AuthService.isLoggedIn().then(res => {
      if (res) {
        console.log(res)
        alert('이미 로그인')
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
        console.log(res)
        alert('success')
        this.$state.go('main')
      }).catch(err => {
        console.log(err)
        alert('err')
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

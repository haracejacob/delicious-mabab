'use strict';

export default class SignupComponent {
  /*@ngInject*/
  constructor($state, AuthService) {
    this.$state = $state
    this.AuthService = AuthService
    this.name = 'test'
    this.email = 'test@test.com'
    this.password = 'password'
    this.submitted = false
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

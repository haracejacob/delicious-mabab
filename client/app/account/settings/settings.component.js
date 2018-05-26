import routing from './settings.routes'
import template from './settings.html'

export class SettingsComponent {
  user = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  errors = {
    other: undefined
  };
  message = '';
  submitted = false;


  /*@ngInject*/
  constructor($state, AuthService) {
    this.$state = $state
    this.AuthService = AuthService
  }

  // changePassword(form) {
  //   this.submitted = true;

  //   if (form.$valid) {
  //     this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
  //       .then(() => {
  //         this.message = 'Password successfully changed.';
  //       })
  //       .catch(() => {
  //         form.password.$setValidity('mongoose', false);
  //         this.errors.other = 'Incorrect password';
  //         this.message = '';
  //       });
  //   }
  // }
}

export default angular.module('deliciousMababApp.settings', [])
  .config(routing)
  .component('settings', {
    template,
    controller: SettingsComponent,
    controllerAs: '$ctrl',
  })
  .name;

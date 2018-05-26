import uiRouter from 'angular-ui-router'
import routing from './adUserUpdate.routes'
import template from './adUserUpdate.html'

export class AdminUserUpdateController {
  /*@ngInject*/
  constructor($uibModalInstance, AlertService, UserService, user) {
    this.$uibModalInstance = $uibModalInstance
    this.AlertService = AlertService
    this.UserService = UserService
    this.user = user
    this.newPassword = ''
  }

  $onInit() { }

  change($event) {
    if (this.newPassword !== '') {
      this.user.password = this.newPassword
    }
    this.UserService.change({ id: this.user.id }, this.user).$promise.then(() => {
      this.AlertService.alert('Success', '성공적으로 수정하였습니다.')
      this.$uibModalInstance.close(this.user)
    }).catch(err => {
      this.AlertService.alert('Error', err.data)
    })
  }

  changeStatus($event, role) {
    this.UserService.change({ id: this.user.id }, { role }).$promise.then(() => {
      this.AlertService.alert('Success', '성공적으로 수정하였습니다.')
      this.user.role = role
      this.$uibModalInstance.close(this.user)
    }).catch(err => {
      this.AlertService.alert('Error', err.data)
    })
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}

export default angular.module('deliciousMababApp.adUserUpdate', [uiRouter])
  .config(routing)
  .component('adUserUpdate', {
    template,
    controller: AdminUserUpdateController
  })
  .name

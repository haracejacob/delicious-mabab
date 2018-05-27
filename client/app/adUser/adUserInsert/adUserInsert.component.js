import uiRouter from 'angular-ui-router'
import routing from './adUserInsert.routes'
import template from './adUserInsert.html'

export class AdminUserInsertController {
  /*@ngInject*/
  constructor($uibModalInstance, AlertService, UserService) {
    this.$uibModalInstance = $uibModalInstance
    this.AlertService = AlertService
    this.UserService = UserService

    this.name = ''
    this.email = ''
    this.password = ''
    this.confirmPassword = ''
    this.role = ''
  }

  $onInit() { }

  create() {
    if (this.name === '') {
      alert('이름을 입력하세요')
      return
    }
    if (this.email === '') {
      alert('이메일을 입력하세요')
      return
    }
    if (this.password === '') {
      alert('비밀번호를 입력하세요')
      return
    }
    if (this.confirmPassword !== this.password) {
      alert('두 비밀번호가 일치하지 않습니다.')
      return
    }
    if (this.role === '') {
      alert('권한을 선택하세요')
      return
    }

    this.UserService.save({
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    }).$promise.then(() => {
      this.$uibModalInstance.close('ok')
    })
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}

export default angular.module('deliciousMababApp.adUserInsert', [uiRouter])
  .config(routing)
  .component('adUserInsert', {
    template,
    controller: AdminUserInsertController
  }).name

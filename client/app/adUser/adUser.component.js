import uiRouter from 'angular-ui-router'
import routing from './adUser.routes'
import template from './adUser.html'

import adUserInsert from './adUserInsert/adUserInsert.component'
import adUserUpdate from './adUserUpdate/adUserUpdate.component'

import adUserUpdatePage from './adUserUpdate/adUserUpdate.html'

export class AdminUserController {
  /*@ngInject*/
  constructor($http, $resource, $uibModal, UserService, AlertService, AuthService) {
    this.$uibModal = $uibModal
    this.UserService = UserService
    this.AlertService = AlertService
    this.AuthService = AuthService
  }

  async $onInit() {
    this.UserService.query().$promise.then(users => {
      this.users = users.map(user => {
        if (user.role === 'user') {
          user.roleKr = '사용자'
        } else {
          user.roleKr = '관리자'
        }
        return user
      })
      console.log(this.users)
    }).catch(err => {
      this.AlertService.alert('Error', err.data)
    })
  }

  async delUser($event, userId) {
    console.log(userId)

    const currentUser = await this.AuthService.getCurrentUser()

    if (currentUser.id === userId) {
      this.AlertService.alert('Error', '본인을 삭제할 수 없습니다.')
      return
    }

    this.AlertService.confirm($event, '주의!', '정말로 삭제 하시겠습니까?').then(res => {
      if (res) {
        this.UserService.remove({ id: userId }).$promise.then(() => {
          this.AlertService.alert('Success', '성공적으로 삭제하였습니다.')
          this.users = this.users.filter(user => user.id !== userId)
        }).catch(err => {
          this.AlertService.alert('Error', err.data)
        })
      }
    })
  }

}

export default angular.module('deliciousMababApp.adUser', [uiRouter, adUserInsert, adUserUpdate])
  .config(routing)
  .component('adUser', {
    template,
    controller: AdminUserController
  })
  .name

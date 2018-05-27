import uiRouter from 'angular-ui-router'
import routing from './adUser.routes'
import template from './adUser.html'

import { AdminUserInsertController } from './adUserInsert/adUserInsert.component'
import { AdminUserUpdateController } from './adUserUpdate/adUserUpdate.component'

import adUserInsertPage from './adUserInsert/adUserInsert.html'
import adUserUpdatePage from './adUserUpdate/adUserUpdate.html'

export class AdminUserController {
  /*@ngInject*/
  constructor($state, $uibModal, UserService, AlertService, AuthService) {
    this.$state = $state
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
    }).catch(err => {
      this.AlertService.alert('Error', err.data)
    })
  }

  async delUser($event, userId) {
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

  openUserUpdateModal(updateUser) {
    this.$uibModal.open({
      template: adUserUpdatePage,
      size: 'md',
      controller: AdminUserUpdateController,
      controllerAs: '$ctrl',
      resolve: {
        user: () => updateUser
      }
    }).result
      .then(updatedUser => {
        this.users = this.users.map(user => {
          if (user.id === updatedUser.id) {
            if (updatedUser.role === 'user') {
              updatedUser.roleKr = '사용자'
            } else {
              updatedUser.roleKr = '관리자'
            }

            return updatedUser
          } else {
            return user
          }
        })
      }).catch(() => { })
  }

  openUserInsertModal() {
    this.$uibModal.open({
      template: adUserInsertPage,
      size: 'md',
      controller: AdminUserInsertController,
      controllerAs: '$ctrl',
    }).result
      .then(() => {
        this.AlertService.alert('Success', '회원을 추가하였습니다.')
        this.$state.reload()
      }).catch(() => { })
  }
}

export default angular.module('deliciousMababApp.adUser', [uiRouter])
  .config(routing)
  .component('adUser', {
    template,
    controller: AdminUserController
  })
  .name

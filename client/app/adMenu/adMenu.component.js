import uiRouter from 'angular-ui-router'
import routing from './adMenu.routes'
import template from './adMenu.html'

import { AdminMenuInsertController } from './adMenuInsert/adMenuInsert.component'
import { AdminMenuUpdateController } from './adMenuUpdate/adMenuUpdate.component'
import adMenuUpdatePage from './adMenuUpdate/adMenuUpdate.html'
import adMenuInsertPage from './adMenuInsert/adMenuInsert.html'

export class AdminMenuController {
  /*@ngInject*/
  constructor($scope, $state, $uibModal, AlertService, MenuService) {
    this.$scope = $scope
    this.$state = $state
    this.$uibModal = $uibModal
    this.AlertService = AlertService
    this.MenuService = MenuService
    this.menus = []
  }

  async $onInit() {
    this.menus = await this.MenuService.query().$promise
    this.$scope.$apply()
  }

  async delUser($event, menuId) {
    this.AlertService.confirm($event, '주의!', '정말로 삭제 하시겠습니까?').then(res => {
      if (res) {
        this.MenuService.remove({ id: menuId }).$promise.then(() => {
          this.AlertService.alert('Success', '성공적으로 삭제하였습니다.')
          this.users = this.users.filter(menu => menu.id !== menuId)
        }).catch(err => {
          this.AlertService.alert('Error', err.data)
        })
      }
    })
  }

  openMenuUpdateModal(updateMenu) {
    this.$uibModal.open({
      template: adMenuUpdatePage,
      size: 'md',
      controller: AdminMenuUpdateController,
      controllerAs: '$ctrl',
      resolve: {
        menu: () => updateMenu
      }
    }).result
      .then(() => {
        this.AlertService.alert('Success', '메뉴를 수정하였습니다.')
        this.$state.reload()
      }).catch(() => { })
  }

  openMenuInsertModal() {
    this.$uibModal.open({
      template: adMenuInsertPage,
      size: 'md',
      controller: AdminMenuInsertController,
      controllerAs: '$ctrl',
    }).result
      .then(() => {
        this.AlertService.alert('Success', '메뉴를 추가하였습니다.')
        this.$state.reload()
      }).catch(() => { })
  }
}

export default angular.module('deliciousMababApp.adMenu', [uiRouter])
  .config(routing)
  .component('adMenu', {
    template,
    controller: AdminMenuController
  })
  .name

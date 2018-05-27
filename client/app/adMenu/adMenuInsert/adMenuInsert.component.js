import uiRouter from 'angular-ui-router'
import routing from './adMenuInsert.routes'
import template from './adMenuInsert.html'

export class AdminMenuInsertController {
  /*@ngInject*/
  constructor($uibModalInstance, AlertService, MenuService, FileUploader) {
    this.$uibModalInstance = $uibModalInstance
    this.AlertService = AlertService
    this.MenuService = MenuService
    this.FileUploader = FileUploader
    this.uploader = new FileUploader({
      url: '/api/menu/'
    })

    this.menu = {
      category: 0,
      name: '',
      price: 0,
      description: '',
      file: ''
    }
  }

  create() {
    if (this.menu.category <= 0) {
      alert('종류를 선택하세요.')
      return
    }
    if (this.menu.name === '') {
      alert('이름을 입력하세요')
      return
    }
    if (this.menu.price <= 0) {
      alert('가격을 입력하세요.')
      return
    }

    this.menu.categoryId = this.menu.category

    const item = this.uploader.queue[0]
    item.formData.push(this.menu)
    item.upload()
    this.uploader.onSuccessItem = () => {
      this.$uibModalInstance.close('ok')
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}

export default angular.module('deliciousMababApp.adMenuInsert', [uiRouter])
  .config(routing)
  .component('adMenuInsert', {
    template,
    controller: AdminMenuInsertController
  }).name

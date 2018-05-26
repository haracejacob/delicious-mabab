import uiRouter from 'angular-ui-router'
import routing from './adUserInsert.routes'
import template from './adUserInsert.html'

export class AdminUserInsertController {
    /*@ngInject*/
    constructor($http, $resource, $uibModal) {
        this.$http = $http;
        this.$resource = $resource;
        this.$uibModal = $uibModal;
    }

    async $onInit() {
        console.log('AdminUserInsertController')
    }

    closeModal() {
        console.log("dd");
        window.history.back();
    }

}

export default angular.module('deliciousMababApp.adUserInsert', [uiRouter])
    .config(routing)
    .component('adUserInsert', {
        template,
        controller: AdminUserInsertController
    })
    .name
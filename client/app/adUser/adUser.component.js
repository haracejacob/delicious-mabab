import uiRouter from 'angular-ui-router'
import routing from './adUser.routes'
import template from './adUser.html'

import adUserInsert from './adUserInsert/adUserInsert.component'
import adUserUpdate from './adUserUpdate/adUserUpdate.component'

import adUserUpdatePage from './adUserUpdate/adUserUpdate.html'
import adUserInsertPage from './adUserInsert/adUserInsert.html'

export class AdminUserController {
    /*@ngInject*/
    constructor($http, $resource, $uibModal) {
        this.$http = $http;
        this.$resource = $resource;
        this.$uibModal = $uibModal;
    }

    async $onInit() {
        console.log('AdminUserController');
    }

    openModal() {
        this.$uibModal.open({
            template: adUserUpdatePage,
            size: 'md'
        })
    }

    closeModal() {
        alert("Dd");
    }

    openModal2() {
        this.$uibModal.open({
            template: adUserInsertPage,
            size: 'md'
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
import uiRouter from 'angular-ui-router'
import routing from './adUser.routes'
import template from './adUser.html'

import adUserInsert from './adUserInsert/adUserInsert.component'
import adUserUpdate from './adUserUpdate/adUserUpdate.component'

import adUserUpdatePage from './adUserUpdate/adUserUpdate.html'

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
            size: 'lg',
            controller: function($scope, $uibModalInstance) {
                $scope.ok = function() {
                    $uibModalInstance.close();
                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
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
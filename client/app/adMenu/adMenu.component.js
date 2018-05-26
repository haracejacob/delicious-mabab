import uiRouter from 'angular-ui-router'
import routing from './adMenu.routes'
import template from './adMenu.html'

import adMenuInsert from './adMenuInsert/adMenuInsert.component'
import adMenuUpdate from './adMenuUpdate/adMenuUpdate.component'
import adMenuUpdatePage from './adMenuUpdate/adMenuUpdate.html'
import adMenuInsertPage from './adMenuInsert/adMenuInsert.html'

export class AdminMenuController {
    /*@ngInject*/
    constructor($http, $resource, $uibModal) {
        this.$http = $http;
        this.$resource = $resource;
        this.$uibModal = $uibModal;
    }

    async $onInit() {
        console.log('AdminMenuController')
    }

    openModal() {
        this.$uibModal.open({
            template: adMenuUpdatePage,
            size: 'md',
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

    openModal2() {
        this.$uibModal.open({
            template: adMenuInsertPage,
            size: 'md',
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

export default angular.module('deliciousMababApp.adMenu', [uiRouter, adMenuInsert, adMenuUpdate])
    .config(routing)
    .component('adMenu', {
        template,
        controller: AdminMenuController
    })
    .name
import uiRouter from 'angular-ui-router'
import routing from './adReservation.routes'
import template from './adReservation.html'

import adReservationInsert from './adReservationInsert/adReservationInsert.component'
import adReservationUpdate from './adReservationUpdate/adReservationUpdate.component'
import adReservationPage from './adReservationUpdate/adReservationUpdate.html'

export class AdminReservationController {
    /*@ngInject*/
    constructor($http, $resource, $uibModal) {
        this.$http = $http
        this.$resource = $resource
        this.$uibModal = $uibModal
    }

    async $onInit() {
        console.log('AdminReservationInsertController')
    }

    openModal() {
        this.$uibModal.open({
            template: adReservationPage,
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

export default angular.module('deliciousMababApp.adReservation', [uiRouter, adReservationInsert, adReservationUpdate])
    .config(routing)
    .component('adReservation', {
        template,
        controller: AdminReservationController
    })
    .name
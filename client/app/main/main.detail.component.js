export class MainDetailController {
  /*@ngInject*/
  constructor($uibModalInstance, $scope, MenuService, ReservationService, reservation) {
    this.$uibModalInstance = $uibModalInstance
    this.$scope = $scope
    this.MenuService = MenuService
    this.ReservationService = ReservationService
    this.reservation = reservation
  }

  async $onInit() {
    this.$scope.$watch('$ctrl.menus', newValue => {

    })

    this.reservations = await this.ReservationService.get({ id: this.reservation.id }).$promise
    console.log(this.reservations)

    this.menus = []
    this.reservations.reservationMenus.forEach(reservationMenu => {
      this.MenuService.get({ id: reservationMenu.menuId}).$promise.then(menu => {
        this.menus.push({
          menu,
          reservationMenu
        })
      })
    })
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}

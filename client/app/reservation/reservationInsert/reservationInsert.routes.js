export default $stateProvider => {
  'ngInject';

  $stateProvider.state('reservationInsert', {
    url: '/reservation/insert',
    template: '<reservation-insert></reservation-insert>',
  })
}

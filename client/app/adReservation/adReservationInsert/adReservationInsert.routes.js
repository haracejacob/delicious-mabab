export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adReservationInsert', {
    url: '/admin/reservation/insert',
    template: '<ad-reservation-insert></ad-reservation-insert>',
  })
}

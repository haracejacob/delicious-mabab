export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adReservationUpdate', {
    url: '/admin/reservation/update',
    template: '<ad-reservation-update></ad-reservation-update>',
  })
}

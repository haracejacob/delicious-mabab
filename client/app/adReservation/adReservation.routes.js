export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adReservation', {
    url: '/admin/reservation',
    template: '<ad-reservation></ad-reservation>',
  })
}

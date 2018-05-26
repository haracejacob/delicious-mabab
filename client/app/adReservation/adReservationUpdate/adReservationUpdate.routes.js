export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adReservationUpdate', {
    url: '/admin/reservation/update',
    template: '<ad-reservation-update></ad-reservation-update>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

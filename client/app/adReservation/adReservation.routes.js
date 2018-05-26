export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adReservation', {
    url: '/admin/reservation',
    template: '<ad-reservation></ad-reservation>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

export default $stateProvider => {
  'ngInject';

  $stateProvider.state('reservationInsert', {
    url: '/reservation/insert',
    template: '<reservation-insert></reservation-insert>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('user', true)
      }
    }
  })
}

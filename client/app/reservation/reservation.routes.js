export default $stateProvider => {
  'ngInject';

  $stateProvider.state('reservation', {
    url: '/reservation',
    template: '<reservation></reservation>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('user', true)
      }
    }
  })
}

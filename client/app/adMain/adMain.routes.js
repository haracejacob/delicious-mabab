export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adMain', {
    url: '/admin',
    template: '<ad-main></ad-main>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

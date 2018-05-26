export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adUser', {
    url: '/admin/user',
    template: '<ad-user></ad-user>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

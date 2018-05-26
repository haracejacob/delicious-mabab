export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adMenu', {
    url: '/admin/menu',
    template: '<ad-menu></ad-menu>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

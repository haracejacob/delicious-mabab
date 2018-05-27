export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adMenuUpdate', {
    url: '/admin/menu/update',
    template: '<ad-menu-update></ad-menu-update>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

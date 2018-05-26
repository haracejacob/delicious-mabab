export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adUserUpdate', {
    url: '/admin/user/update',
    template: '<ad-user-update></ad-user-update>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

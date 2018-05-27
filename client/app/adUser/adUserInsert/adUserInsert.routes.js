export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adUserInsert', {
    url: '/admin/user/insert',
    template: '<ad-user-insert></ad-user-insert>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

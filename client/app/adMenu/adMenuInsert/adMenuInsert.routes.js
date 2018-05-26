export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adMenuInsert', {
    url: '/admin/menu/insert',
    template: '<ad-menu-insert></ad-menu-insert>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('admin', true)
      }
    },
  })
}

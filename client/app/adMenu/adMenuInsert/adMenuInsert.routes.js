export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adMenuInsert', {
    url: '/admin/menu/insert',
    template: '<ad-menu-insert></ad-menu-insert>',
  })
}

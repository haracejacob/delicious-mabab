export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adMenu', {
    url: '/admin/menu',
    template: '<ad-menu></ad-menu>',
  })
}

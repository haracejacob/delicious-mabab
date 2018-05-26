export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adUser', {
    url: '/admin/user',
    template: '<ad-user></ad-user>',
  })
}

export default $stateProvider => {
  'ngInject';

  $stateProvider.state('settings', {
    url: '/settings',
    template: '<settings></settings>',
    authenticate: true
  });
}

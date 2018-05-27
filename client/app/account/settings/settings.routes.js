export default $stateProvider => {
  'ngInject';

  $stateProvider.state('settings', {
    url: '/settings',
    template: '<settings></settings>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('user', true)
      }
    }
  });
}

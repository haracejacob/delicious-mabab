export default $stateProvider => {
  'ngInject';

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>',
    resolve: {
      auth: async AuthService => {
        await AuthService.isLoggedIn(true)
      }
    }
  })
}

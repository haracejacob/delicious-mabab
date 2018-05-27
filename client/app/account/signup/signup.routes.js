export default $stateProvider => {
  'ngInject';

  $stateProvider.state('signup', {
    url: '/signup',
    template: '<signup></signup>',
    resolve: {
      auth: async AuthService => {
        await AuthService.isLoggedIn(true)
      }
    }
  })
}

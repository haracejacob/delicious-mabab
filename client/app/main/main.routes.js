export default function routes($stateProvider) {
  'ngInject'

  $stateProvider.state('main', {
    url: '/',
    template: '<main></main>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('user', true)
      }
    }
  })
}

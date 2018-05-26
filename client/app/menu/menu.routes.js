export default function routes($stateProvider) {
  'ngInject'

  $stateProvider.state('menu', {
    url: '/menu',
    template: '<menu></menu>',
    resolve: {
      auth: async AuthService => {
        await AuthService.hasRole('user', true)
      }
    }
  })
}

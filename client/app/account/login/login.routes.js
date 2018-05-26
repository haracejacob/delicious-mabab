export default $stateProvider => {
  'ngInject';

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>',
  })
}

export default $stateProvider => {
  'ngInject';

  $stateProvider.state('adMain', {
    url: '/admin',
    template: '<ad-main></ad-main>',
  })
}

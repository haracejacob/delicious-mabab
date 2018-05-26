export default $stateProvider => {
  'ngInject';

  $stateProvider.state('signup', {
    url: '/signup',
    template: '<signup></signup>',
  })
}

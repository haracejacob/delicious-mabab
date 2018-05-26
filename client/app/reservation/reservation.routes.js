export default $stateProvider => {
  'ngInject';

  $stateProvider.state('reservation', {
    url: '/reservation',
    template: '<reservation></reservation>',
  })
}

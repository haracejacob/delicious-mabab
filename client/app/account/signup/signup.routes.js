/* @ngInject */
import template from './signup.html'

export default $stateProvider => {
  'ngInject';

  $stateProvider
    .state('signup', {
      url: '/signup',
      template,
      controller: 'SignupComponent',
      controllerAs: '$ctrl'
    })
}

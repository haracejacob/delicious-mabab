/* @ngInject */
import template from './login.html'

export default $stateProvider => {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      template,
      controller: 'LoginComponent',
      controllerAs: '$ctrl'
    })
}

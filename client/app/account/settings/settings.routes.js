/* @ngInject */
import template from './settings.html'

export default $stateProvider => {
  'ngInject';

  $stateProvider
    .state('settings', {
      url: '/settings',
      template,
      controller: 'SettingsController',
      controllerAs: '$ctrl',
      authenticate: true
    });
}

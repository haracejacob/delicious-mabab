import uiRouter from 'angular-ui-router';

import routing from './account.routes';
import login from './login/login.component';
import settings from './settings/settings.component';
import signup from './signup/signup.component';

export default angular.module('deliciousMababApp.account', [uiRouter, login, settings, signup])
  .config(routing)
  .run(function($rootScope) {
    'ngInject';

    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  })
  .name;

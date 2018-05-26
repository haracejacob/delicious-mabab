'use strict';

export default $stateProvider => {
  'ngInject';

  $stateProvider
    .state('logout', {
      url: '/logout?referrer',
      referrer: 'main',
      template: '',
      controller($state, AuthService) {
        'ngInject';

        const referrer = $state.params.referrer || $state.current.referrer || 'main';
        AuthService.logout();
        $state.go(referrer);
      }
    })
}

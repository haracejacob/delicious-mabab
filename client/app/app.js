'use strict';

import angular from 'angular'
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies'
import ngResource from 'angular-resource'
import ngMaterial from 'angular-material'
// import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router'
import uiBootstrap from 'angular-ui-bootstrap'
import 'angular-validation-match'

import routing from './app.routes'

// User side page
import account from './account/account.component';
import main from './main/main.component'
import reservation from './reservation/reservation.component'
import menu from './menu/menu.component'

// Admin side page
import adUser from './adUser/adUser.component'
import adMain from './adMain/adMain.component'
import adReservation from './adReservation/adReservation.component'
import adMenu from './adMenu/adMenu.component'

// Component
import navbar from '../components/navbar/navbar.component'
import footer from '../components/footer/footer.component'
import adNavbar from '../components/adNavbar/adNavbar.component'
import adSidebar from '../components/adSidebar/adSidebar.component'

// Service
import services from '../components/services'
// import constants from './app.constants';
// import util from '../components/util/util.module';

import './app.css'

// angular.module('deliciousMababApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap,
//   _Auth, account, admin, 'validation.match', navbar, footer, main, constants, util
// ])
//   .config(routeConfig)
//   .run(function($rootScope, $location, Auth) {
//     'ngInject';
//     // Redirect to login if route requires auth and you're not logged in

//     $rootScope.$on('$stateChangeStart', function(event, next) {
//       Auth.isLoggedIn(function(loggedIn) {
//         if(next.authenticate && !loggedIn) {
//           $location.path('/login');
//         }
//       });
//     });
//   });

// angular.element(document)
//   .ready(() => {
//     angular.bootstrap(document, ['deliciousMababApp'], {
//       strictDi: true
//     });
//   });

angular.module('deliciousMababApp', [
  // modules
  uiRouter, ngResource, ngCookies, uiBootstrap, ngMaterial,
  // user side pages
  main, account, reservation, menu,
  // admin side pages
  adUser, adMain, adReservation, adMenu,
  // components
  navbar, footer, adNavbar, adSidebar,
  // services
  services,
])
  .config(routing)
  .run(($rootScope, $location, $state, $transitions) => {
    'ngInject'

    $transitions.onSuccess({}, function(transition) {
      const current = transition.to().name

      if (['login', 'signup'].includes(current)) {
        $rootScope.status = 'login'
      } else if (current.startsWith('ad')) {
        $rootScope.status = 'admin'
      } else {
        $rootScope.status = 'logined'
      }
    })
  })

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['deliciousMababApp'], {
      strictDi: false
    })
  });

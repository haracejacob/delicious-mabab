'use strict';

import angular from 'angular'
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
// import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router'
// import uiBootstrap from 'angular-ui-bootstrap'
// import 'angular-validation-match';

import {
  routeConfig
} from './app.config'

import account from './account';
// import admin from './admin';
import navbar from '../components/navbar/navbar.component'
import footer from '../components/footer/footer.component'
import main from './main/main.component'

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
  uiRouter, ngResource, ngCookies,
  // pages
  main, account,
  // components
  navbar, footer,
  // services
  services,
])
.config(routeConfig)
.run(() => {
  'ngInject';
});

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['deliciousMababApp'], {
      strictDi: false
    })
  });

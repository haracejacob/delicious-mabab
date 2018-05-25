'use strict';

import LoginComponent from './login.component'
import routing from './login.routes'

export default angular.module('deliciousMababApp.login', [])
  .config(routing)
  .controller('LoginComponent', LoginComponent)
  .name;

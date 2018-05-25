'use strict';

import SignupComponent from './signup.component'
import routing from './signup.routes'

export default angular.module('deliciousMababApp.signup', [])
  .config(routing)
  .controller('SignupComponent', SignupComponent)
  .name;

'use strict';

import SettingsComponent from './settings.component'
import routing from './settings.routes'

export default angular.module('deliciousMababApp.settings', [])
  .config(routing)
  .controller('SettingsComponent', SettingsComponent)
  .name;

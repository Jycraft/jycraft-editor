import angular from 'angular';
import uirouter from 'angular-ui-router';

import {states} from './edit.states';

export default angular.module('app.sessions.edit', [uirouter])
    .config(states)
    .name;

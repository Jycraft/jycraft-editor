import angular from 'angular';
import uirouter from 'angular-ui-router';

import {states} from './map.states';

export default angular.module('app.sessions.map', [uirouter])
    .config(states)
    .name;

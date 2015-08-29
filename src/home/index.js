import angular from 'angular';
import uirouter from 'angular-ui-router';

import {states} from './home.states';

export default angular.module('app.home', [uirouter])
    .config(states)
    .name;

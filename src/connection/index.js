import angular from 'angular';
import uirouter from 'angular-ui-router';
import '../vendor/angular-websocket';

import {states} from './connection.states';
import Connection from './connection.service';

export default angular.module('app.connection', [
        uirouter,
        'ngWebSocket'
    ])
    .config(states)
    .service('connection', Connection)
    .name;

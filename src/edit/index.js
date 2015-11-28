import angular from 'angular';
import uirouter from 'angular-ui-router';

// Setup ACE
require('ace-min-noconflict/ace.js');
require('ace-min-noconflict/mode-python.js');
import 'angular-ui-ace/src/ui-ace.js';


import {states} from './edit.states';
import Console from './console.directive';

export default angular.module('app.edit', [
        uirouter,
        'ui.ace'
    ])
    .config(states)
    .directive('console', Console)
    .name;

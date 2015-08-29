import ConnectController from './connect.controller';
import { SessionsController } from './sessions.controllers';
import { SessionController } from './sessions.controllers';

function states ($stateProvider) {
    $stateProvider
        .state('connect', {
            parent: 'root',
            url: '/connect',
            template: require('./connect.html'),
            controller: ConnectController,
            controllerAs: 'ctrl'
        })
        .state('sessions', {
            parent: 'root',
            url: '/sessions',
            template: '<ui-view></ui-view>'
        })
        .state('sessions.list', {
            parent: 'sessions',
            url: '/list',
            template: require('./sessions.list.html'),
            controller: SessionsController,
            controllerAs: 'ctrl'
        })
        .state('session', {
            parent: 'sessions',
            url: '/:id',
            template: require('./session.html'),
            controller: SessionController,
            controllerAs: 'ctrl',
            resolve: SessionController.resolve
        });
}
states.$inject = ['$stateProvider'];

export {states};

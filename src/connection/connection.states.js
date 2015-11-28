import Controller from './connection.controller';

function states ($stateProvider) {
    $stateProvider
        .state('connect', {
            parent: 'root',
            url: '/connect',
            template: require('./connection.html'),
            controller: Controller,
            controllerAs: 'ctrl'
        });
}
states.$inject = ['$stateProvider'];

export {states};

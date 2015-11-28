import Controller from './edit.controller';

function states ($stateProvider) {
    $stateProvider
        .state('edit', {
            parent: 'root',
            url: '/edit',
            template: require('./edit.html'),
            controller: Controller,
            controllerAs: 'ctrl',
            resolve: Controller.resolve
        });
}
states.$inject = ['$stateProvider'];

export {states};

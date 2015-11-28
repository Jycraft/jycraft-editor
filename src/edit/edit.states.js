import Controller from './edit.controller';

function states ($stateProvider) {
    $stateProvider
        .state('edit', {
            parent: 'root',
            url: '/edit',
            template: require('./edit.html'),
            controller: Controller,
            controllerAs: 'ctrl'
        });
}
states.$inject = ['$stateProvider'];

export {states};

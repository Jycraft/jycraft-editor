function states ($stateProvider) {
    $stateProvider

        .state('session.map', {
            parent: 'session',
            url: '/map',
            template: require('./session.map.html'),
            controller: SessionMapController,
            controllerAs: 'ctrl'
        });
}
states.$inject = ['$stateProvider'];

export {states};

import HomeController from './home.controller';

function states ($stateProvider) {
    $stateProvider
        .state('home', {
            parent: 'root',
            url: '/',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'ctrl'
        });
}
states.$inject = ['$stateProvider'];

export {states};

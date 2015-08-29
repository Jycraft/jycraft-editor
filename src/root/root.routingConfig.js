export function routingConfig ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
routingConfig.$inject = ['$urlRouterProvider'];

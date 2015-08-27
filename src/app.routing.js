export function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
}
routeConfig.$inject = ["$urlRouterProvider"];

export function routeRun() {
}
routeRun.$inject = [];

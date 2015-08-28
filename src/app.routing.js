export function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
}
routeConfig.$inject = ["$urlRouterProvider"];

export function routeRun($log, $rootScope, $mdToast) {
    $rootScope.$on("$stateChangeError", function (evt, toState, toParams, fromState, fromParams, error) {
        let message = "Failed to change states";
        $log.debug("State change failed:", toState, error);
        $mdToast.show($mdToast.simple().content(message));
    });
}
routeRun.$inject = ["$log", "$rootScope", "$mdToast"];

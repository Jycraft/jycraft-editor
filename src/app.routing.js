export function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
}

export function routeRun($rootScope, $state, $mdToast, connection) {
    $rootScope.$on("$stateChangeStart", function (event, next) {
        // Whenever a route change starts, see if the next route needs
        // a connection. If we"re not connected, go to /connect
        if (next.requiresConnection && !connection.isConnected) {
            event.preventDefault();
            let msg = "Need to connect first";
            $mdToast.show($mdToast.simple().content(msg));
            $state.go("connect");
        }
    });
}

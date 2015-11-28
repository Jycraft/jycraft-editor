export function routingRun ($log, $rootScope, $mdToast) {
    $rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams, error) {
        let message = 'Failed to change states';
        $log.debug('State change failed:', toState, error);
        $mdToast.show($mdToast.simple().content(message));
    });
}
routingRun.$inject = ['$log', '$rootScope', '$mdToast'];

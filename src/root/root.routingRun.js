export function routingRun ($log, $rootScope, toast) {
    $rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams, error) {
        let message = 'Failed to change states';
        $log.debug('State change failed:', toState, error);
        toast.show(toast.simple().content(message));
    });
}
routingRun.$inject = ['$log', '$rootScope', 'toast'];

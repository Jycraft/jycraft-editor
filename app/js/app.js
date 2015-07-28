
function ModuleConfig($routeProvider, $mdThemingProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl as ctrl'
        }).
        when('/connect', {
            templateUrl: 'partials/connect.html',
            controller: 'ConnectCtrl as ctrl'
        }).
        when('/session', {
            templateUrl: 'partials/session.html',
            controller: 'SessionCtrl as ctrl',
            requiresConnection: false
            //requiresConnection: true
        }).
        otherwise({
            redirectTo: '/home'
        });

    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('pink');

}

function ModuleRun($rootScope, $location, connection) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
        // Whenever a route change starts, see if the next route needs
        // a connection. If we're not connected, go to /connect
        if (next.requiresConnection && !connection.isConnected) {
            $location.path('/connect');
        }
    });
}

angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'ngRoute',
    'ui.ace', 'ngWebSocket'])
    .config(ModuleConfig)
    .run(ModuleRun)
    .service('connection', Connection)
    .controller('HomeCtrl', HomeCtrl)
    .controller('ConnectCtrl', ConnectCtrl)
    .controller('SessionCtrl', SessionCtrl);

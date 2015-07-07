function ConnectCtrl ($mdToast) {
    this.connect = function (host, port, password) {
        $mdToast.show($mdToast.simple().content('Hello!'));
    }
}

function ModuleConfig($routeProvider, $mdThemingProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'partials/connect.html',
            controller: 'ConnectCtrl as ctrl'
        }).
        when('/todos', {
            templateUrl: 'todos_list.html',
            controller: 'ToDosCtrl as ctrl'
        }).
        otherwise({
            redirectTo: '/'
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

angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'ngRoute'])
    .config(ModuleConfig)
    .controller('ConnectCtrl', ConnectCtrl);

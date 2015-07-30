export default function routing($stateProvider, $urlRouterProvider) {
    $stateProvider.state('root', {
            abstract: true,
            template: "<ui-view/>"
        }
    );
    $urlRouterProvider.otherwise("/");
}

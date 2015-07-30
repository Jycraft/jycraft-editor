export default function routes($stateProvider) {
    $stateProvider
        .state("connect", {
            url: "/connect",
            template: require("./connect.html"),
            controller: require("./connect.controller"),
            controllerAs: "ctrl"
        })
        .state("session", {
            url: "/session",
            template: require("./session.html"),
            controller: require("./session.controller"),
            controllerAs: "ctrl"
        });
}

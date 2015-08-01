export default function routes($stateProvider) {
    $stateProvider
        .state("connect", {
            parent: "root",
            url: "/connect",
            template: require("./connect.html"),
            controller: require("./connect.controller"),
            controllerAs: "ctrl"
        })
        .state("session", {
            parent: "root",
            url: "/session",
            template: require("./session.html"),
            controller: require("./sessions.controller"),
            controllerAs: "ctrl",
            requiresConnection: true
        });
}

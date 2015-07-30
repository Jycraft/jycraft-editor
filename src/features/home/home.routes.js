export default function routes($stateProvider) {
    $stateProvider
        .state("home", {
            parent: "root",
            url: "/",
            template: require("./home.html"),
            controller: require("./home.controller"),
            controllerAs: "ctrl"
        });
}

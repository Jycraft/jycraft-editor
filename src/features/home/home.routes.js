export default function routes($stateProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            template: require("./home.html"),
            controller: require("./home.controller.js"),
            controllerAs: "ctrl"
        });
}

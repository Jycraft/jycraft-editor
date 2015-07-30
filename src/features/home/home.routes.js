import HomeController from "./home.controller";

export default function routes($stateProvider) {
    $stateProvider
        .state("home", {
            parent: "root",
            url: "/",
            template: require("./home.html"),
            controller: HomeController,
            controllerAs: "ctrl"
        });
}

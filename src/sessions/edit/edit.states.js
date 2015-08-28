import Controller from "./edit.controller";

function states($stateProvider) {
    $stateProvider
        .state("session.edit", {
            parent: "session",
            url: "/edit",
            template: require("./session.edit.html"),
            controller: Controller,
            controllerAs: "ctrl"
        });
}
states.$inject = ["$stateProvider"];

export {states};

"use strict";

import RootController from "./root.controller";

function states($stateProvider) {
    $stateProvider.state("root", {
            abstract: true,
            template: require("./root.html"),
            controller: RootController,
            controllerAs: "ctrl"
        }
    );
}
states.$inject = ["$stateProvider"];

export {states};
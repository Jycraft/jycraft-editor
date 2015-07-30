import ConnectController from "./connect.controller";
import SessionController from "./session.controller";

export default function routes($stateProvider) {
    $stateProvider
        .state("connect", {
            parent: "root",
            url: "/connect",
            template: require("./connect.html"),
            controller: ConnectController,
            controllerAs: "ctrl"
        })
        .state("session", {
            parent: "root",
            url: "/session",
            template: require("./session.html"),
            controller: SessionController,
            controllerAs: "ctrl"
        });
}

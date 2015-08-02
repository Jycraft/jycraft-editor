import { ConnectController } from "./connect.controller";
import { SessionsController } from "./sessions.controllers";
import { SessionController } from "./sessions.controllers";

export default function routes($stateProvider) {
    $stateProvider
        .state("connect", {
            parent: "root",
            url: "/connect",
            template: require("./connect.html"),
            controller: ConnectController,
            controllerAs: "ctrl"
        })
        .state("sessions", {
            parent: "root",
            url: "/sessions",
            template: require("./sessions.html"),
            controller: SessionsController,
            controllerAs: "ctrl"
        })
        .state("session", {
            parent: "root",
            url: "/sessions/1",
            template: require("./session.html"),
            controller: SessionController,
            controllerAs: "ctrl",
            requiresConnection: true
        });
}

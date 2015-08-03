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
            template: "<ui-view></ui-view>",
            controller: SessionsController,
            controllerAs: "ctrl"
        })
        .state("sessions.list", {
            parent: "sessions",
            url: "/list",
            template: require("./sessions.list.html"),
            controller: SessionsController,
            controllerAs: "ctrl"
        })
        .state("session", {
            parent: "sessions",
            url: "/:id",
            template: require("./session.html"),
            resolve: {
                sessionId: function ($stateParams, connection) {
                    connection.connect("localhost", 44445, "swordfish");
                    return $stateParams.id;
                }
            }
        })
        .state("session.edit", {
            url: "/edit",
            template: require("./session.edit.html"),
            controller: SessionController,
            controllerAs: "ctrl"
        });
}

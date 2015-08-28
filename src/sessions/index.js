import "./sessions.css";

import angular from "angular";
import uirouter from "angular-ui-router";
import "../vendor/angular-websocket";

// Setup ACE
require("ace-min-noconflict/ace.js");
require("ace-min-noconflict/mode-python.js");
import "angular-ui-ace/src/ui-ace.js";

import routing from "./sessions.routes";
import Connection from "./connection.service";
import Console from "./console.directive";

export default angular.module("app.sessions",
    [uirouter, "ngWebSocket", "ui.ace"])
    .config(routing)
    .service("connection", Connection)
    .directive("console", Console)
    .name;
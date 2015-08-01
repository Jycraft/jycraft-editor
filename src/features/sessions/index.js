import angular from "angular";
import uirouter from "angular-ui-router";

// Setup ACE
require("ace-min-noconflict/ace.js");
require("ace-min-noconflict/mode-python.js");
import "angular-ui-ace/src/ui-ace.js";

import routing from "./sessions.routes";
import connection from "../../services/connection.service";
import console from "../../directives/console.directive";

export default angular.module("app.sessions",
    [uirouter, connection, "ui.ace", console])
    .config(routing)
    .name;

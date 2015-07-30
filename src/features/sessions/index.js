import angular from "angular";
import uirouter from "angular-ui-router";

// Setup ACE
require("ace-min-noconflict/ace.js");
require("ace-min-noconflict/mode-python.js");
import "angular-ui-ace/src/ui-ace.js";

import routing from "./sessions.routes";
import connection from "../../services/connection.service";
import greeting from "../../directives/greeting.directives";

export default angular.module("app.sessions",
    [uirouter, connection, "ui.ace", greeting])
    .config(routing)
    .name;

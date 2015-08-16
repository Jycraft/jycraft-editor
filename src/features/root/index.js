import "./root.css";

import angular from "angular";
import uirouter from "angular-ui-router";

import routing from "./root.routes";
import connection from "../../services/connection.service";

export default angular.module("app.root", [
    uirouter,
    connection
])
    .config(routing)
    .name;

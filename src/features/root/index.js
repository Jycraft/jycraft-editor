import "./root.css";

import angular from "angular";
import uirouter from "angular-ui-router";

import routing from "./root.routes";

export default angular.module("app.root", [uirouter])
    .config(routing)
    .name;

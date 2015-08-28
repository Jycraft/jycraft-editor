import "./root.css";

import angular from "angular";
import uirouter from "angular-ui-router";

import {routingConfig} from "./root.routingConfig";
import {routingRun} from "./root.routingRun";
import states from "./root.states";

export default angular.module("app.root", [uirouter])
    .config(routingConfig)
    .config(states)
    .run(routingRun)
    .name;

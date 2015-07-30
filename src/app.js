import "angular-material/angular-material.css";

import angular from "angular";
import ngMaterial from "angular-material";
import uirouter from "angular-ui-router";
import "angular-material-icons";

import {routeConfig} from "./app.routing";
import {routeRun} from "./app.routing";
import theming from "./app.theming";
import root from "./features/root";
import home from "./features/home";
import sessions from "./features/sessions";

angular.module("app", [ngMaterial, "ngMdIcons", uirouter,
    root, home, sessions])
    .config(routeConfig)
    .config(theming)
    .run(routeRun);

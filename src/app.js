import "angular-material/angular-material.css";

import angular from "angular";
import ngMaterial from "angular-material";
import uirouter from "angular-ui-router";
import "angular-material-icons";

import directives from "./directives";
import {routeConfig} from "./app.routing";
import {routeRun} from "./app.routing";
import theming from "./app.theming";
import root from "./root";
import home from "./home";
import sessions from "./sessions";

angular.module("app", [ngMaterial, "ngMdIcons", uirouter,
    root,
    home,
    sessions,
    directives
])
    .config(routeConfig)
    .config(theming)
    .run(routeRun);

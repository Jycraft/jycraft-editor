"use strict";

import "angular-material/angular-material.css";

import angular from "angular";
import ngMaterial from "angular-material";
import "angular-material-icons";

import themingConfig from "./app.theming";
import root from "./root";
import home from "./home";
import sessions from "./sessions";

angular.module("app", [ngMaterial, "ngMdIcons",
    root,
    home,
    sessions
])
    .config(themingConfig);
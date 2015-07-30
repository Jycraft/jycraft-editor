import "angular-material/angular-material.css";
import "./app.css";

import angular from "angular";
import ngMaterial from "angular-material";
import uirouter from "angular-ui-router";
import "angular-material-icons";

import routing from "./app.config";
import home from "./features/home";
import sessions from "./features/sessions";

angular.module("app", [ngMaterial, "ngMdIcons", uirouter,
    home, sessions])
    .config(routing);

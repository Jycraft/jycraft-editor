import angular from "angular";
import ngMaterial from "angular-material";
import "../vendor/angular-websocket";

import Connection from "./connection";


export default angular.module("services.connection",
    [ngMaterial, "ngWebSocket"])
    .service("connection", Connection)
    .name;

import angular from "angular";

import Console from "./console";


export default angular.module("app.directives", [])
    .directive("console", Console)
    .name;
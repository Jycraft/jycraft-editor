import angular from "angular";

import Console from "./console";

export default angular.module("directives.console", [])
    .directive("console", Console)
    .name;

//import angular from "angular";
//import $ from "jQuery";
//
//function GreetingController() {
//    var ctrl = this;
//    this.jqconsole = $("#console").jqconsole("Hi\n", "\n>>>");
//    var startPrompt = function () {
//        // Start the prompt with history enabled.
//        ctrl.jqconsole["Prompt"](true, function (input) {
//            // Output input with the class jqconsole-output.
//            ctrl.jqconsole["Write"](input + "\n", "jqconsole-output");
//            // Restart the prompt.
//            startPrompt();
//        });
//    };
//    startPrompt();
//}
//
//function GreetingLink($scope, element) {
//
//    console.debug("in link function", $);
//}
//
//function greeting() {
//    return {
//        restrict: "E",
//        scope: {},
//        bindToController: {
//        },
//        template: '<div id="console"></div>',
//        controller: GreetingController,
//        controllerAs: "ctrl",
//        link: GreetingLink
//    };
//}
//
//export default angular.module("directives.greeting", [])
//    .directive("greeting", greeting)
//    .name;

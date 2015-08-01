import angular from "angular";
import $ from "jquery";
require("../vendor/jqconsole");

function GreetingController($rootScope) {
    var ctrl = this;
    // Handle non-login websocket responses, meaning, EvalResponse
    $rootScope.$on(
        "EvalResponse",
        function (event, response) {
            ctrl.jqconsole['Write'](
                response.replace("\r", ""), "jqconsole-output");
        });
}

function GreetingLink(scope, element, attr, ctrl) {
    ctrl.jqconsole = $(element).find("#console").jqconsole("Hi\n", "\n>>>");
    var startPrompt = function () {
        // Start the prompt with history enabled.
        ctrl.jqconsole["Prompt"](true, function (input) {
            // Output input with the class jqconsole-output.
            ctrl.jqconsole["Write"](input + "\n", "jqconsole-output");
            // Restart the prompt.
            startPrompt();
        });
    };
    startPrompt();
}

function greeting() {
    return {
        restrict: "E",
        scope: {},
        bindToController: {
            codeSnippet: "=ngModel",
            run: "&run"
        },
        template: '<div id="console"></div>',
        controller: GreetingController,
        controllerAs: "ctrl",
        link: GreetingLink
    };
}

export default angular.module("directives.greeting", [])
    .directive("greeting", greeting)
    .name;

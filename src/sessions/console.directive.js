import $ from 'jquery';
require('../vendor/jqconsole');

function ConsoleController ($rootScope) {
    var ctrl = this;
    // Handle non-login websocket responses, meaning, EvalResponse
    $rootScope.$on(
        'EvalResponse',
        (event, response) =>
            ctrl.jqconsole.Write(
                response.replace('\r', ''), 'jqconsole-output')
    );
}
ConsoleController.$inject = ['$rootScope'];

function ConsoleLink (scope, element, attr, ctrl) {
    ctrl.jqconsole = $(element).find('#console').jqconsole('Hi\n', '\n>>>');
    var startPrompt = function () {
        // Start the prompt with history enabled.
        ctrl.jqconsole.Prompt(true, function (input) {
            // Output input with the class jqconsole-output.
            ctrl.jqconsole.Write(input + '\n', 'jqconsole-output');
            // Restart the prompt.
            startPrompt();
        });
    };
    startPrompt();
}
ConsoleLink.$inject = ['scope', 'element', 'attr', 'ctrl'];

export default function Console () {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {},
        template: `<div id='console'></div>`,
        controller: ConsoleController,
        controllerAs: 'ctrl',
        link: ConsoleLink
    };
}

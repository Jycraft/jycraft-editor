import angular from "angular";
import $ from "jQuery";

function GreetingController() {
    var ctrl = this;
    function aceLoaded(_editor) {
        _editor.commands.addCommand({
            name: "Execute",
            bindKey: {
                mac: "Command-Shift-Up",
                win: "Alt-Shift-Up"
            },
            exec: function () {
                ctrl.run(ctrl.codeSnippet);
            }
        });
    }

    function aceChanged() {
        //console.debug("ace was changed");
    }

    this.aceConfig = {
        useWrapMode: true,
        mode: "python",
        onLoad: aceLoaded,
        onChange: aceChanged
    };
}

function GreetingLink($scope, element) {

    console.debug("in link function", $);
}

function greeting() {
    return {
        restrict: "E",
        scope: {},
        bindToController: {
            codeSnippet: "=ngModel"
        },
        template: "<code>{{codeSnippet}}</code>",
        controller: GreetingController,
        controllerAs: "ctrl",
        link: GreetingLink
    };
}

export default angular.module("directives.greeting", [])
    .directive("greeting", greeting)
    .name;

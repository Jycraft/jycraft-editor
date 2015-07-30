import angular from "angular";

function GreetingController() {
    var ctrl = this;
    this.run();
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

function greeting() {
    return {
        restrict: "E",
        scope: {},
        bindToController: {
            codeSnippet: "=ngModel",
            run: "&run"
        },
        template: '<div ui-ace="ctrl.aceConfig" ng-model="ctrl.codeSnippet"></div>',
        controller: GreetingController,
        controllerAs: "ctrl"
    };
}

export default angular.module("directives.greeting", [])
    .directive("greeting", greeting)
    .name;

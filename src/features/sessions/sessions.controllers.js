export class SessionsController {
    constructor() {
    }
}
SessionsController.$inject = [];

export class SessionController {
    constructor(sessionId) {
        this.sessionId = sessionId;
    }
}
SessionController.$inject = ["sessionId"];

export class SessionMapController {
    constructor($rootScope, $scope, $interval, connection) {
        this.$rootScope = $rootScope;
        this.connection = connection;
        this.players = {
            "PMD221": {x: "555px", y: "444px"}
        };
        var ctrl = this;

        //function randomIntFromInterval(min, max) {
        //    return Math.floor(Math.random() * (max - min + 1) + min);
        //}

        $rootScope.$on(
            "JsonResponse",
            function (event, response) {
                //randomIntFromInterval(100,
                // 500);
                var x = response["PMD221"].x;
                var y = response["PMD221"].y;
                ctrl.players["PMD221"].x = `${x}px`;
                ctrl.players["PMD221"].y = `${y}px`;
            });
        var poll = $interval(function () {
            ctrl.refresh();
        }, 500);
        $scope.$destroy = function () {
            $interval.cancel(poll);
        }
    }

    refresh() {
        let snippet = `
from player_map import playerPositions
print playerPositions()`;
        this.connection.send(snippet);
    }
}
SessionMapController.$inject = ["$rootScope", "$scope", "$interval", "connection"];

let defaultSnippet = `
from player_map import playerPositions
print playerPositions()`;

export class SessionEditController {
    constructor($log, $rootScope, $mdToast, connection) {
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.$mdToast = $mdToast;
        this.connection = connection;
        this.codeSnippet = defaultSnippet;

        var aceLoaded = (_editor) => {
            _editor.commands.addCommand({
                name: "Execute",
                bindKey: {
                    mac: "Command-Shift-Up",
                    win: "Alt-Shift-Up"
                },
                exec: function () {
                    this.run(this.snippet);
                }
            });
        };

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

    run() {
        // Make sure we are still connected
        if (!this.connection.isConnected) {
            let msg = "Lost the connection";
            $mdToast.show($mdToast.simple().content(msg));
        }
        this.connection.send(this.codeSnippet);
    }
}
SessionEditController.$inject = ["$log", "$rootScope", "$mdToast", "connection"];
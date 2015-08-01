export default class Controller {
    constructor($log, $rootScope, connection, $mdToast) {
        var ctrl = this;
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.connection = connection;
        this.$mdToast = $mdToast;
        this.codeSnippet = "from mcapi import *\nyell('HOWDY')";

        function aceLoaded(_editor) {
            _editor.commands.addCommand({
                name: "Execute",
                bindKey: {
                    mac: "Command-Shift-Up",
                    win: "Alt-Shift-Up"
                },
                exec: function () {
                    ctrl.run(ctrl.snippet);
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

    run() {
        // Make sure we are still connected
        if (!this.connection.isConnected) {
            let msg = "Lost the connection";
            $mdToast.show($mdToast.simple().content(msg));
        }
        this.connection.send(this.codeSnippet);
    }
}

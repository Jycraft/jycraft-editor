let defaultSnippet = `
from mcapi import yell
yell('Howdy')`;

class Controller {
    static $inject = ['$log', '$rootScope', 'toast', 'connection'];
    static resolve = {
        isConnected: [
            'connection', '$state', '$mdToast',
            function (connection, $state, $mdToast) {
                if (!connection.isConnected) {
                    let message = 'Not yet connected';
                    $mdToast.show($mdToast.simple().content(message));
                    $state.go('connect');
                }
            }]
    };

    constructor ($log, $rootScope, toast, connection) {
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.toast = toast;
        this.connection = connection;
        this.codeSnippet = defaultSnippet;

        var aceLoaded = (_editor) => {
            _editor.commands.addCommand(
                {
                    name: 'Execute',
                    bindKey: {
                        mac: 'Command-Shift-Up',
                        win: 'Alt-Shift-Up'
                    },
                    exec: function () {
                        this.run(this.codeSnippet);
                    }
                });
        };

        function aceChanged () {
            //console.debug('ace was changed');
        }

        this.aceConfig = {
            useWrapMode: true,
            mode: 'python',
            onLoad: aceLoaded,
            onChange: aceChanged
        };
    }

    run () {
        // Make sure we are still connected
        if (!this.connection.isConnected) {
            this.toast.show('Lost the connection');
        }
        this.connection.sendPython(this.codeSnippet);
    }
}

export default Controller;

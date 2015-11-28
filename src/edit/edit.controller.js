let defaultSnippet = `
from mcapi import yell
yell('Howdy')`;

class Controller {
    constructor ($log, $rootScope, toast, connection) {
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.toast = toast;
        this.connection = connection;
        this.codeSnippet = defaultSnippet;

        var aceLoaded = (_editor) => {
            _editor.commands.addCommand({
                name: 'Execute',
                bindKey: {
                    mac: 'Command-Shift-Up',
                    win: 'Alt-Shift-Up'
                },
                exec: function () {
                    this.run(this.snippet);
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
        this.connection.send(this.codeSnippet);
    }
}
Controller.$inject = ['$log', '$rootScope', 'toast', 'connection'];

export default Controller;

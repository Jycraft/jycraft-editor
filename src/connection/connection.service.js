import closeErrors from './connection.errors';

class Connection {

    constructor ($log, $rootScope, $websocket, toast) {
        this.dataStream = null;
        this.isConnected = false;
        this.loginFailed = false;
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.$websocket = $websocket;
        this.toast = toast;
    }

    connect (host, port, password) {
        this.dataStream = this.$websocket('ws://' + host + ':' + port);

        this.dataStream.onMessage((message) => this.onMessage(message));
        this.dataStream.onClose((event) => this.onClose(event));

        let msg = JSON.stringify({type: 'login', password: password});
        this.dataStream.send(msg);
    }

    // Handlers for response types

    loginHandler (msg) {
        let code = msg.status.code;
        if (code === 100) {
            this.isConnected = true;
            this.loginFailed = false;
        } else if (code === 500) {
            this.isConnected = false;
            this.loginFailed = true;
        } else {
            this.isConnected = false;
            this.loginFailed = true;
            this.toast.show('Failed login with unknown code: ' + code);
        }
    }

    interactiveHandler (msg) {
        let response = msg.result;
        this.$rootScope.$broadcast('EvalResponse', response);
    }

    sendPython (code) {
        let msg = {type: 'interactive', command: code};
        this.dataStream.send(JSON.stringify(msg));
    }

    onMessage (message) {
        // Dispatcher for different kinds of messages
        let msg = JSON.parse(message.data);
        this[msg.type + 'Handler'](msg);

        return;
    }

    onClose (event) {
        this.isConnected = false;
        let code = event.code;
        let reason = closeErrors[code] ? closeErrors[code] : 'Unknown reason';

        this.toast.show('Connection closed: ' + reason);

    }

}

Connection.$inject = ['$log', '$rootScope', '$websocket', 'toast'];

export default Connection;

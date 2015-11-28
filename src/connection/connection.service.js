
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
        this.dataStream.onOpen(() => this.onOpen(password));
        this.dataStream.onClose((event) => this.onClose(event));
    }

    onMessage (message) {
        // Dispatcher for different kinds of messages
        let response = message.data;

        // Parse various kinds of responses
        if (response === `Login by sending 'login!<PASSWORD>'`) {
            // This is the response on the first connection, do
            // nothing
            this.isConnected = false;
        } else if (response.startsWith('Incorrect password!')) {
            this.toast.show('Incorrect password');
        } else if (response.startsWith('Not authorized, login first')) {
            this.isConnected = false;
            this.loginFailed = true;
        } else {
            this.isConnected = true;
            this.loginFailed = false;
            this.$rootScope.$broadcast('EvalResponse', response);
        }
    }

    onOpen (password) {
        this.dataStream.send('login!' + password);
    }

    onClose (event) {
        this.isConnected = false;
        let code = event.code;
        let reason = closeErrors[code] ? closeErrors[code] : 'Unknown reason';

        this.toast.show('Connection closed: ' + reason);

    }

    send (codeSnippet) {
        var ctrl = this;
        if (this.dataStream == null) {
            this.toast.show('Not connected');
        } else {
            ctrl.dataStream.send(codeSnippet);
        }
    }
}

Connection.$inject = ['$log', '$rootScope', '$websocket', 'toast'];

export default Connection;

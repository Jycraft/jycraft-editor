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
        this.$log.debug('Execute', msg);
    }

    onMessage (message) {
        // Dispatcher for different kinds of messages
        let msg = JSON.parse(message.data);
        this.$log.debug('Incoming msg', msg);
        this[msg.type + 'Handler'](msg);

        return;


        // Parse various kinds of responses
        //if (response === `Login by sending 'login!<PASSWORD>'`) {
        //    // This is the response on the first connection, do
        //    // nothing
        //    this.isConnected = false;
        //} else if (response.startsWith('Incorrect password!')) {
        //    this.toast.show('Incorrect password');
        //} else if (response.startsWith('Not authorized, login first')) {
        //    this.isConnected = false;
        //    this.loginFailed = true;
        //} else {
        //    this.isConnected = true;
        //    this.loginFailed = false;
        //    this.$rootScope.$broadcast('EvalResponse', response);
        //}
    }

    onClose (event) {
        this.isConnected = false;
        let code = event.code;
        let reason = closeErrors[code] ? closeErrors[code] : 'Unknown reason';

        this.toast.show('Connection closed: ' + reason);

    }

    send (msg) {
        this.$log.debug('sending msg', msg);
        this.dataStream.send(msg);
    }
}

Connection.$inject = ['$log', '$rootScope', '$websocket', 'toast'];

export default Connection;

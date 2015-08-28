class Connection {
    constructor($log, $rootScope, $websocket, $mdToast) {
        this.dataStream = null;
        this.isConnected = false;
        this.loginFailed = false;
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.$websocket = $websocket;
        this.$mdToast = $mdToast;
    }

    connect(host, port, password) {
        var ctrl = this,
            $rootScope = this.$rootScope;
        ctrl.dataStream = this.$websocket("ws://" + host + ":" + port);


        let fullResponse = {
            isStarted: false,
            value: ""

        };
        ctrl.dataStream.onMessage(function (message) {
            var response = message.data;

            // Parse various kinds of responses
            if (response === `Login by sending 'login!<PASSWORD>'`) {
                // This is the response on the first connection, do
                // nothing
                ctrl.isConnected = false;
            } else if (response === "Not authorized, login first by" +
                ` sending 'login!<PASSWORD>'`) {
                ctrl.isConnected = false;
                ctrl.loginFailed = true;
            } else {
                ctrl.isConnected = true;
                ctrl.loginFailed = false;
                $rootScope.$broadcast("EvalResponse", response);
            }
        });
        ctrl.dataStream.onOpen(function () {
            ctrl.dataStream.send("login!" + password);
        });
        ctrl.dataStream.onClose((event) => this.onClose(event));
    }

    onClose(event) {
        this.isConnected = false;
        let code = event.code;
        let reason = closeErrors[code] ? closeErrors[code] : "Unknown reason";

        this.toast("Connection closed: " + reason);

    }

    send(codeSnippet) {
        var ctrl = this;
        if (this.dataStream == null) {
            this.toast("Not connected");
        } else {
            ctrl.dataStream.send(codeSnippet);
        }
    }

    toast(message) {
        this.$mdToast.show(this.$mdToast.simple().content(message));
    }
}

Connection.$inject = ["$log", "$rootScope", "$websocket", "$mdToast"];

export default Connection;

// Error code mapping data
var closeErrors = {
    1000: `Normal closure, meaning that the purpose for which the
    connection was established has been fulfilled.`,
    1001: `An endpoint is "going away", such as a server going down or a
    browser having navigated away from a page.`,
    1002: `An endpoint is terminating the connection due to a protocol error`,
    1003: `An endpoint is terminating the connection because it has
     received a type of data it cannot accept (e.g., an endpoint that
     understands only text data MAY send this if it receives a binary
     message).`,
    1004: `Reserved. The specific meaning might be defined in the future.`,
    1005: `No status code was actually present.`,
    1006: `The connection was closed abnormally, e.g., without sending
    or receiving a Close control frame`,
    1007: `An endpoint is terminating the connection because it has
    received data within a message that was not consistent with the type
    of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629]
    data within a text message).`,
    1008: `An endpoint is terminating the connection because it has
    received a message that "violates its policy". This reason is
    given either if there is no other suitable reason, or if there is a
    need to hide specific details about the policy.`,
    1009: `An endpoint is terminating the connection because it has
    received a message that is too big for it to process.`,
    1010: `An endpoint (client) is terminating the connection because
    it has expected the server to negotiate one or more extension, but
    the server didn't return them in the response message of the
    WebSocket handshake.`,
    1011: `A server is terminating the connection because it encountered
    an unexpected condition that prevented it from fulfilling the
    request.`,
    1015: `The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).`

}
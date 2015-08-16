export default class Connection {
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
            $log = this.$log,
            $rootScope = this.$rootScope,
            $websocket = this.$websocket,
            $mdToast = this.$mdToast;
        ctrl.dataStream = $websocket("ws://" + host + ":" + port);


        let fullResponse = {
            isStarted: false,
            value: ''

        };
        ctrl.dataStream.onMessage(function (message) {
            var response = message.data;

            // Parse various kinds of responses
            if (response === "Login by sending 'login!<PASSWORD>'") {
                // This is the response on the first connection, do
                // nothing
                ctrl.isConnected = false;
            } else if (response === "Not authorized, login first by" +
                " sending 'login!<PASSWORD>'") {
                ctrl.isConnected = false;
                ctrl.loginFailed = true;
            } else if (response == '$') {
                // Here's the fun stuff, handle a series of characters in
                // the response, starting and finishing with $, and
                // treat those in between as a JSON stream. Gotta fix
                // the server plugin.
                if (fullResponse.isStarted) {
                    // We received our second $, let's emit a message
                    $rootScope.$broadcast("JsonResponse", JSON.parse(fullResponse.value));
                    fullResponse.isStarted = false;
                    fullResponse.value = '';
                } else {
                    fullResponse.isStarted = true;
                }
            } else if (fullResponse.isStarted && response != '$') {
                fullResponse.value += response;
            } else {
                ctrl.isConnected = true;
                ctrl.loginFailed = false;
                $rootScope.$broadcast("EvalResponse", response);
            }
        });
        ctrl.dataStream.onOpen(function () {
            ctrl.dataStream.send("login!" + password);
        });
        ctrl.dataStream.onClose(function () {
            ctrl.isConnected = false;
            $mdToast.show($mdToast.simple().content("Connection closed"));
        });
        ctrl.dataStream.onError(function (event) {
            $mdToast.show($mdToast.simple().content("Error occurred"));
            $log.debug("Error", event);
        });
    }

    send(codeSnippet) {
        var ctrl = this,
            $mdToast = this.$mdToast;
        if (this.dataStream == null) {
            $mdToast.show($mdToast.simple().content("Not" +
                                                    " connected"));
        } else {
            ctrl.dataStream.send(codeSnippet);
        }
    }
}

Connection.$inject = ["$log", "$rootScope", "$websocket", "$mdToast"];


function Connection($log, $rootScope, $websocket, $mdToast) {
    var ctrl = this;
    this.isConnected = false;
    this.dataStream = null;
    this.isConnected = false;
    this.loginFailed = false;

    this.connect = function (host, port, password) {
        $log.debug('connecting', host);
        ctrl.dataStream = $websocket('ws://' + host + ':' + port);
        ctrl.dataStream.onMessage(function (message) {
            var response = message.data;

            // Parse various kinds of responses
            if (response == "Login by sending 'login!<PASSWORD>'") {
                // This is the response on the first connection, do
                // nothing
                ctrl.isConnected = false;
            } else if (response == "Not authorized, login first by sending 'login!<PASSWORD>'") {
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
        ctrl.dataStream.onClose(function () {
            ctrl.isConnected = false;
            $mdToast.show($mdToast.simple().content("Connection closed"));
        });
        ctrl.dataStream.onError(function (event) {
            $mdToast.show($mdToast.simple().content("Error occurred"));
            $log.debug("Error", event);
        });
    };

    this.send = function (codeSnippet) {
        if (this.dataStream == null) {
            $mdToast.show($mdToast.simple().content("Not connected"));
        } else {
            ctrl.dataStream.send(codeSnippet);
        }
    };

}

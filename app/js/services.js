function Connection($log, $websocket) {
    var ctrl = this;
    this.isConnected = false;
    this.host = "localhost";
    this.port = "44445";
    this.password = "swordfish";
    this.dataStream = null;
    this.responses = [];
    this.isConnected = false;
    this.loginFailed = false;

    this.connect = function () {
        ctrl.dataStream = $websocket('ws://' + ctrl.host + ':' + ctrl.port);
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
                ctrl.responses.push(response);
            }
        });
        ctrl.dataStream.onOpen(function () {
            ctrl.dataStream.send("login!" + ctrl.password);
        });
    }
}

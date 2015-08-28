"use strict";

class ConnectController {
    constructor($log, $scope, toast, connection, $state) {
        this.host = "localhost";
        this.port = 44445;
        this.password = "swordfish";
        this.$log = $log;
        this.$state = $state;
        this.connection = connection;

        // Handle a good connection
        $scope.$watch(
            function () {
                return connection.isConnected;
            },
            function () {
                if (connection.isConnected) {
                    // Navigate away, we're connected
                    toast.show("You are connected");
                    $state.go("sessions.list");
                }
            }
        );

        // Handle connection error
        $scope.$watch(
            function () {
                return connection.loginFailed;
            },
            function (err) {
                if (connection.loginFailed) {
                    toast.show("Error: " + err);
                }
            }
        );

    }

    connect(host, port, password) {
        this.connection.connect(host, port, password);
    }
}
ConnectController.$inject = ["$log", "$scope", "toast", "connection", "$state"];

export default ConnectController;

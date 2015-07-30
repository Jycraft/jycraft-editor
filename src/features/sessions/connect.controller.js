export default class Controller {
    constructor($log, $scope, $mdToast, connection, $state) {
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
                    $mdToast.show($mdToast.simple().content("You are connected"));
                    $state.go("session");
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
                    $mdToast.show($mdToast.simple().content("Error: " + err));
                }
            }
        );

    }

    connect(host, port, password) {
        this.connection.connect(host, port, password);
    }
}

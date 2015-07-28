function HomeCtrl($location, connection) {
    this.connection = connection;
    this.goto = function (route) {
        $location.path(route);
    };
}

function ConnectCtrl($log, $scope, $mdToast, connection, $location) {
    // Set some defaults
    this.host = "localhost";
    this.port = 44445;
    this.password = "swordfish";
    this.connect = function (host, port, password) {
        connection.connect(host, port, password);
    };

    // Handle a good connection
    $scope.$watch(
        function () {
            return connection.isConnected;
        },
        function () {
            if (connection.isConnected) {
                // Navigate away, we're connected
                $mdToast.show($mdToast.simple().content("You are connected"));
                $location.path("/session");
            }
        }
    );

    // Handle connection error
    $scope.$watch(
        function () {
            return connection.loginFailed;
        },
        function () {
            if (connection.loginFailed) {
                $mdToast.show($mdToast.simple().content("Error: " + err));
            }
        }
    )
}

function SessionCtrl() {
    this.codeSnippet = "x = 1 + 1";
    this.aceConfig = {
        useWrapMode: true,
        mode: "python",
        onLoad: aceLoaded,
        onChange: aceChanged
    };
    function aceLoaded(ace) {
        //ace.setOptions({basePath: "/lib"});
        //console.debug("ace was loaded ###");
    }

    function aceChanged() {
        //console.debug("ace was changed");
    }
}

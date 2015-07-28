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

function SessionCtrl($log, $rootScope, connection) {
    var ctrl = this;
    this.connection = connection;
    this.codeSnippet = "print 1 + 1";
    this.jqconsole = $('#console').jqconsole('Hi\n', '\n>>>');
    this.aceConfig = {
        useWrapMode: true,
        mode: "python",
        onLoad: aceLoaded,
        onChange: aceChanged
    };

    this.run = function (codeSnippet) {
        connection.send(codeSnippet);
    };

    // Handle non-login websocket responses, meaning, EvalResponse
    $rootScope.$on(
        "EvalResponse",
        function (event, response) {
            ctrl.jqconsole.Write(response.replace('\r', ''), 'jqconsole-output');
        });

    var startPrompt = function () {
        // Start the prompt with history enabled.
        ctrl.jqconsole.Prompt(true, function (input) {
            // Output input with the class jqconsole-output.
            ctrl.jqconsole.Write(input + '\n', 'jqconsole-output');
            // Restart the prompt.
            startPrompt();
        });
    };
    startPrompt();

    function aceLoaded(ace) {
        //ace.setOptions({basePath: "/lib"});
        //console.debug("ace was loaded ###");
    }

    function aceChanged() {
        //console.debug("ace was changed");
    }
}

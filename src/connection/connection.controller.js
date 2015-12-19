class ConnectionController {
    static $inject = ['$log', '$scope', 'toast', 'connection', '$state'];

    constructor ($log, $scope, toast, connection, $state) {
        this.host = 'localhost';
        this.port = 44446;
        this.password = 'swordfish';
        this.$log = $log;
        this.$state = $state;
        this.connection = connection;

        // Handle a good connection
        $scope.$watch(
            () => connection.isConnected,
            () => {
                if (connection.isConnected) {
                    // Navigate away, we're connected
                    toast.show('You are connected');
                    $state.go('edit');
                }
            }
        );

        // Handle connection error
        $scope.$watch(
            () => connection.loginFailed,
            (err) => {
                if (connection.loginFailed) {
                    toast.show('Error: ' + err);
                }
            }
        );

    }

    connect (host, port, password) {
        this.connection.connect(host, port, password);
    }
}

export default ConnectionController;

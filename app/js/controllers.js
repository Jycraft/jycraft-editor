function HomeCtrl($location, connection) {
    var ctrl = this;
    this.connection = connection;
    this.goto = function (route) {
        $location.path(route);
    };
}

function Connection() {
    this.isConnected = false;
    this.host = null;
    this.port = null;
    this.password = null;
    this.connect = function (host, port, password) {
        if (password == '123') {
            this.isConnected = true;
            return false;
        } else {
            return 'Bad Password';
        }
    }
}

function ConnectCtrl($mdToast, connection, $location) {
    this.connect = function (host, port, password) {
        var err = connection.connect(host, port, password);
        if (err == false) {
            $mdToast.show($mdToast.simple().content('You are connected'));
            $location.path('/session')
        } else {
            $mdToast.show($mdToast.simple().content('Error: ' + err));
        }
    }
}

function SessionCtrl() {
    this.codeSnippet = "x = 1 + 1";
    this.aceConfig = {
        useWrapMode: true,
        mode: 'python',
        onLoad: aceLoaded,
        onChange: aceChanged
    };
    function aceLoaded(ace) {
        //ace.setOptions({basePath: '/lib'});
        console.debug('ace was loaded ###');
    };
    function aceChanged() {
        console.debug('ace was changed');
    };
}

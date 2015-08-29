class Controller {
    constructor ($log, connection) {
        this.$log = $log;
        this.connection = connection;
    }
}
Controller.$inject = ['$log', 'connection'];

export default Controller;

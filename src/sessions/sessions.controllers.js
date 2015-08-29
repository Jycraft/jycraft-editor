export class SessionsController {
    constructor () {
    }
}
SessionsController.$inject = [];

export class SessionController {
    constructor (sessionId) {
        this.sessionId = sessionId;
    }
}
SessionController.$inject = ['sessionId'];
SessionController.resolve = {
    sessionId: ['$stateParams', 'connection',
        function ($stateParams, connection) {
            connection.connect('localhost', 44445, 'swordfish');
            return $stateParams.id;
        }]
};

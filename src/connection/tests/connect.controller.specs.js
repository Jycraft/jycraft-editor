import { expect } from 'chai';

import ConnectionController from '../connection.controller';

describe('ConnectionController', () => {

    let $log, $scope, connection, toast, $state, ctrl;

    beforeEach(() => {
        $scope = {
            $watch: function () {

            }
        };
    });

    beforeEach(() => {
        ctrl = new ConnectionController($log, $scope, toast, connection, $state);
    });

    it('can be imported', () => {
        expect(ConnectionController).to.be.an('function');
    });

});

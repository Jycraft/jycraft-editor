import { expect } from 'chai';

import {SessionsController} from '../sessions.controllers';

describe('Controller', () => {

    let $log, $rootScope, connection, toast, editor, ctrl;

    beforeEach(() => {
        ctrl = new SessionsController($log, $rootScope, connection, toast);
    });

    it('can be imported', () => {
        expect(SessionsController).to.be.an('function');
    });

    it('can be constructed', () => {
        expect(ctrl).to.be.an('object');
    });

    it('ACE to be configured', () => {
        //expect(ctrl.aceConfig).to.be.an('object');
        //expect(ctrl.aceConfig.onLoad).to.be.an('function');
        //expect(ctrl.aceConfig.onChange).to.be.an('function');
    });

});

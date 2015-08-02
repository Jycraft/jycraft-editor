import { expect } from "chai";

import Controller from "../sessions.controller";

describe.only("Controller", () => {

    let $log, $rootScope, connection, $mdToast, editor, ctrl;

    beforeEach(() => {
        ctrl = new Controller($log, $rootScope, connection, $mdToast);
    });

    it("can be imported", () => {
        expect(Controller).to.be.an("function");
    });
    
    it("can be constructed", () => {
        expect(ctrl).to.be.an("object");
    });

    it("ACE to be configured", () => {
        expect(ctrl.aceConfig).to.be.an("object");
        expect(ctrl.aceConfig.onLoad).to.be.an("function");
        expect(ctrl.aceConfig.onChange).to.be.an("function");
    });

});

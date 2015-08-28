"use strict";

import { expect } from "chai";

import ConnectController from "../connect.controller";

describe.only("ConnectController", () => {

    let $log, $scope, connection, $mdToast, $state, ctrl;

    beforeEach(() => {
        $scope = {
            $watch: function () {

            }
        }
    });

    beforeEach(() => {
        ctrl = new ConnectController($log, $scope, $mdToast, connection, $state);
    });

    it("can be imported", () => {
        expect(ConnectController).to.be.an("function");
    });

});

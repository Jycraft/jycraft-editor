"use strict";

import { expect } from "chai";

import ConnectController from "../connect.controller";

describe("ConnectController", () => {

    let $log, $scope, connection, toast, $state, ctrl;

    beforeEach(() => {
        $scope = {
            $watch: function () {

            }
        }
    });

    beforeEach(() => {
        ctrl = new ConnectController($log, $scope, toast, connection, $state);
    });

    it("can be imported", () => {
        expect(ConnectController).to.be.an("function");
    });

});

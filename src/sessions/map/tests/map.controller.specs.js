"use strict";

import { expect } from "chai";

import Controller from "../map.controller";


describe("Maps Controller Setup", () => {

    it("can be imported", () => {
        expect(Controller).to.be.an("function");
    });
});

"use strict";

import { expect } from "chai";

import Controller from "../edit.controller";


describe("Edit Controller Setup", () => {

    it("can be imported", () => {
        expect(Controller).to.be.an("function");
    });
});

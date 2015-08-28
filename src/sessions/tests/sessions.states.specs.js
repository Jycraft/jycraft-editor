"use strict";

import { expect } from "chai";

import states from "../sessions.states";

describe("states", () => {
    it("can be imported", () => {
        expect(states).to.be.an('function');
    });
});

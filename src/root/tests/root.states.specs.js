import { expect } from "chai";

import states from "../root.states";

describe("states", () => {
    it("can be imported", () => {
        expect(states).to.be.an('function');
    });
});

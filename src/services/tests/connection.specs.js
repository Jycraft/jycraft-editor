import { expect } from "chai";

import Connection from "../connection";

describe("Connections manager", () => {
    it("can be imported", () => {
        expect(Connection).to.be.an('function');
    });
});

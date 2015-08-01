import { expect } from "chai";

import routes from "../sessions.routes";

describe("routes", () => {
    it("can be imported", () => {
        expect(routes).to.be.an('function');
    });
});

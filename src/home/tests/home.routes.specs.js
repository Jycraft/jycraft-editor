import { expect } from "chai";

import routes from "../home.routes";

describe("routes", () => {
    it("can be imported", () => {
        expect(routes).to.be.an('function');
    });
});

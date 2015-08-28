import { expect } from "chai";

import Controller from "../home.controller";

describe("Controller", () => {
    it("can be imported", () => {
        expect(Controller).to.be.an("function");
    });
    it("can be instantiated", () => {
        let obj = new Controller();
        expect(obj).to.be.an("object");
    });
});

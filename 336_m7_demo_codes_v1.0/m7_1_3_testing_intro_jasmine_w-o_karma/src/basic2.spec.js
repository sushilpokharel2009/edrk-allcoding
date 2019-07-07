'use strict';
xdescribe("GroupOne", function () {
    var a = 5, b = 10, c = 20;
    beforeEach(function () {
        a = 10;
    });
    afterEach(function () {
        a = 5;
    });
    it("UTOne", function () {
        c = 10;
        expect(c).toEqual(10);
    });
    it("UTTwo", function () {
        expect(a).toEqual(10);
    });
    it("UTThree", function () {
        expect(b).toEqual(10);
    });
});
describe("GroupTwo", function () {
    var a = 5, b = 10, c = 20;
    beforeEach(function () {
        a = 10;
    });
    afterEach(function () {
        a = 5;
    });
    it("UTOne", function () {
        c = 10;
        expect(c).toEqual(10);
    });
    it("UTTwo", function () {
        expect(a).toEqual(10);
    });
    it("UTThree", function () {
        expect(b).toEqual(10);
    });
});
//# sourceMappingURL=basic2.spec.js.map
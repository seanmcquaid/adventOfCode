const dayOne = require("../dayOne");
const expect = require("chai").expect;
const testArray = dayOne.array;

describe("Day One Problems", () => {
    describe("Day One Mass Calculator", () => {
        it("Should add the test array correctly for mass", done => {
            expect(dayOne.calculateMass(testArray)).to.equal(3388015);
            done();
        })
    }),
    describe("Day One Fuel Calculator", () => {
        it("Should add the test array correctly for fuel", done => {
            expect(dayOne.calculateFuel(testArray)).to.equal(5079140);
            done();
        })
    })
})
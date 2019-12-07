const dayTwo = require("../dayTwo");
const expect = require("chai").expect;


describe("Day Two Problems", () => {
    describe("Int Code Problem", () => {
        it("Int Code Works Properly", done => {
            expect(dayTwo.part1(12, 2)).to.equal(3516593);
            done();
        })
        it("Int Code Program Part 2 Works", done => {
            expect(dayTwo.part2(19690720)).to.equal(7749);
            done();
        })
    })
});
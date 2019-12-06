const dayOne = require("../dayOne");
const expect = require("chai").expect;

const array = [
    135568,
    93567,
    74616,
    116524,
    97342,
    78397,
    146320,
    147564,
    62929,
    119077,
    67410,
    120049,
    70541,
    110713,
    112447,
    145348,
    102068,
    114736,
    53901,
    86524,
    120050,
    127555,
    146277,
    53860,
    80276,
    137697,
    79305,
    134372,
    96073,
    69122,
    125296,
    117850,
    143600,
    88494,
    56534,
    109901,
    124036,
    82066,
    135308,
    91000,
    93619,
    147786,
    125127,
    76653,
    149032,
    65864,
    50784,
    108189,
    109455,
    98761,
    56177,
    96484,
    71289,
    73103,
    101584,
    105978,
    63607,
    131868,
    81217,
    96817,
    95946,
    137326,
    72221,
    95949,
    142230,
    102055,
    88307,
    89670,
    130285,
    127194,
    65451,
    80781,
    123180,
    110380,
    59598,
    132438,
    62048,
    128950,
    63286,
    91364,
    148439,
    111630,
    121158,
    97784,
    143589,
    140514,
    135369,
    114701,
    51451,
    107496,
    138090,
    50617,
    88343,
    120007,
    77216,
    77028,
    64462,
    70883,
    115812,
    113776,
];

describe("Day One Problems", () => {
    describe("Day One Mass Calculator", () => {
        it("Should add the test array correctly for mass", done => {
            expect(dayOne.calculateMass(array)).to.equal(3388015);
            done();
        })
    }),
    describe("Day One Fuel Calculator", () => {
        it("Should add the test array correctly for fuel", done => {
            expect(dayOne.calculateFuel(array)).to.equal(5079140);
            done();
        })
    })
})
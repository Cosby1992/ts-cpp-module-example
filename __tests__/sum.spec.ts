import { sum } from "../src/index";

describe("Sum", () => {
    // [ input1, input2, expectedResult ]
    const cases: [number, number, number][] = [
        [1,1,2],
        [2,2,4],
        [0,0,0],
        [-100,100,0],
        [-100,-100,-200],
        [12500000, 12500000, 25000000],
        [0.00005, 0.00005, 0.0001]
    ];

    it.each(cases)("The sum of %s and %s should be %s", (num1, num2, expected) => {
        const actual = sum(num1, num2);
        expect(actual).toBe(expected);
    })
})
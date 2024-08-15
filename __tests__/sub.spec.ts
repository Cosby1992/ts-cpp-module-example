import { sub } from "../src/index";

describe("Sub", () => {
    // [ input1, input2, expectedResult ]
    const cases: [number, number, number][] = [
        [1,1,0],
        [2,2,0],
        [0,0,0],
        [-100,100,-200],
        [100,50,50],
        [12500000, 0, 12500000],
        [-123456, 100000, -223456]
    ];

    it.each(cases)("The sub of %s and %s should be %s", (num1, num2, expected) => {
        const actual = sub(num1, num2);
        expect(actual).toBe(expected);
    })
})
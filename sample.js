const { sum, subtract } = require("./math");

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },

    toEqual(expected) {

    },

    toBeGreaterThan(expected) {

    },
  };
};

let result = sum(5, 5);
let expected = 10;
expect(result).toBe(expected);

result = subtract(5, 4);
expected = 1;
expect(result).toBe(expected);

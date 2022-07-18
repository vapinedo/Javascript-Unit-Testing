const { sum, subtract } = require("./math");

const test = (title, callback) => {
  try {
    callback();
    console.log("Success: " + title);
  } catch (e) {
    console.log("Error: " + title);
    console.log(e);
  }
};

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },

    toEqual(expected) {},

    toBeGreaterThan(expected) {},
  };
};

test("Add two numbers", () => {
  const result = sum(5, 5);
  const expected = 10;
  expect(result).toBe(expected);
});

test("Subtract two numbers", () => {
  const result = subtract(5, 4);
  const expected = 1;
  expect(result).toBe(expected);
});

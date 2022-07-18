const { sum, subtract, sumAsync, subtractAsync } = require("./math");

const test = async (title, callback) => {
  try {
    await callback();
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

test("Add async two numbers", async () => {
  const result = await sumAsync(5, 5);
  const expected = 10;
  expect(result).toBe(expected);
});

test("Subtract async two numbers", async () => {
  const result = await subtractAsync(5, 4);
  const expected = 1;
  expect(result).toBe(expected);
});
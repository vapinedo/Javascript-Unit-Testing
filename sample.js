const { sum, subtract, sumAsync, subtractAsync } = require("./math");
const { test, expect } = require('./testing');

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
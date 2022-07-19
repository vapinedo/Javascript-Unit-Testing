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

module.exports = { test, expect };

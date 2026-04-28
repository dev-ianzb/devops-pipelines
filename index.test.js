const { add, isAdult } = require("./index");

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers correctly", () => {
  expect(add(-2, -3)).toBe(-5);
});

test("adds a positive and a negative number correctly", () => {
  expect(add(5, -2)).toBe(3);
});

test("returns true for age 18 and above", () => {
  expect(isAdult(18)).toBe(true);
  expect(isAdult(25)).toBe(true);
});

test("returns false for below 18", () => {
  expect(isAdult(17)).toBe(false);
});

test("returns false for negative ages", () => {
  expect(isAdult(-1)).toBe(false);
});

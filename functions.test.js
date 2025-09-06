const { sortDesc, maxSubarraySum, nestedEvenSum } = require("./functions");

test("Sort descending", () => {
  expect(sortDesc([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test("Max subarray sum example 1", () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
});

test("Max subarray sum example 2", () => {
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test("Max subarray sum example 3", () => {
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

test("Nested even sum example 1", () => {
  const input = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  expect(nestedEvenSum(input)).toBe(6);
});

test("Nested even sum example 2", () => {
  const input = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };
  expect(nestedEvenSum(input)).toBe(12);
});

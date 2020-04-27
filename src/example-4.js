function countUniqueValues(values) {
  let count = 0;
  let prev = null;
  for (const val of values) {
    if (val !== prev) {
      count++;
    }
    prev = val;
  }
  return count;
}

test("countUniqueValues", () => {
  expect(countUniqueValues([])).toBe(0);
  expect(countUniqueValues([1])).toBe(1);
  expect(countUniqueValues([1, 1, 1, 1, 1, 1])).toBe(1);
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});

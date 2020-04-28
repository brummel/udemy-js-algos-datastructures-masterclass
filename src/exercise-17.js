function someRecursive(values, predicate) {
  if (values.length === 0) {
    return false;
  }
  if (predicate(values[0])) {
    return true;
  }
  return someRecursive(values.slice(1), predicate);
}

const isOdd = (n) => n % 2 !== 0;

test("someRecursive", () => {
  expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
  expect(someRecursive([2, 4, 6, 8], isOdd)).toBe(false);
});

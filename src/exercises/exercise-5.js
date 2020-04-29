function averagePair(values, target) {
  for (let i = 0; i < values.length - 1; i++) {
    const searchValue = 2 * target - values[i];
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] === searchValue) {
        return true;
      }
    }
  }
  return false;
}

test("averagePair", () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  expect(averagePair([], 4)).toBe(false);
});

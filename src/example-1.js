function same(first, second) {
  const firstCount = getFreqCount(first);
  const secondCount = getFreqCount(second);
  for (const key in firstCount) {
    const keySquared = (parseInt(key) ** 2).toString();
    if (firstCount[key] !== secondCount[keySquared]) {
      return false;
    }
  }
  return true;
}

function getFreqCount(values) {
  const freqCount = {};
  for (const val of values) {
    freqCount[val] = ++freqCount[val] || 1;
  }
  return freqCount;
}

test("same", () => {
  expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
  expect(same([1, 2, 3], [1, 9])).toBe(false);
  expect(same([1, 2, 1], [4, 4, 1])).toBe(false);
});

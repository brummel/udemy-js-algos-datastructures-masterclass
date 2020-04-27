function minSubArrayLen(values, minSum) {
  let six = 0;
  let eix = 0;
  let windowSum = 0;
  let minLen = Infinity;

  while (eix < values.length || windowSum >= minSum) {
    if (windowSum < minSum) {
      windowSum = windowSum + values[eix];
      eix++;
    } else {
      windowSum = windowSum - values[six];
      six++;
    }

    if (windowSum >= minSum) {
      minLen = Math.min(minLen, eix - six);
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

test("minSubArrayLen", () => {
  expect(minSubArrayLen([], 1)).toBe(0);
  expect(minSubArrayLen([5], 10)).toBe(0);
  expect(minSubArrayLen([5, 5, 5], 15)).toBe(3);
  expect(minSubArrayLen([5, 5, 10], 15)).toBe(2);
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 9)).toBe(3);
  expect(minSubArrayLen([2, 3, 25, 75, 4, 3], 100)).toBe(2);
  expect(minSubArrayLen([1, 1, 25, 1, 1, 1], 24)).toBe(1);
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
});

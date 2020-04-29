function maxSubarraySum(values, n) {
  let maxSum = null;
  let windowSum = null;
  for (let eix = 0; eix < values.length; eix++) {
    if (eix < n) {
      windowSum += values[eix];
      if (eix === n - 1) {
        maxSum = windowSum;
      }
    } else {
      windowSum = windowSum - values[eix - n] + values[eix];
      if (windowSum > maxSum) {
        maxSum = windowSum;
      }
    }
  }
  return maxSum;
}

test("maxSubarraySum", () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  expect(maxSubarraySum([2, 3], 3)).toBe(null);
});

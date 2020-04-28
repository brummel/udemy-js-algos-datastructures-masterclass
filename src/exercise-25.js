function binarySearch(sorted, val, six = 0, eix = sorted.length - 1) {
  if (six > eix) {
    return -1;
  }
  const mix = Math.floor((six + eix) / 2);
  if (val === sorted[mix]) return mix;
  if (val < sorted[mix]) return binarySearch(sorted, val, 0, mix - 1);
  if (val > sorted[mix]) return binarySearch(sorted, val, mix + 1, eix);
}

test("binarySearch", () => {
  expect(binarySearch([], 1)).toBe(-1);
  expect(binarySearch([5], 5)).toBe(0);
  expect(binarySearch([5], 6)).toBe(-1);
  expect(binarySearch([5], 4)).toBe(-1);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).toBe(0);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
  expect(binarySearch([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
});

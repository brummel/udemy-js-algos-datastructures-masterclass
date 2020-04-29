function areThereDuplicates(...rest) {
  let freqCount = {};

  for (const v of rest) {
    if (freqCount[v]) {
      return true;
    } else {
      freqCount[v] = true;
    }
  }
  return false;
}

test("areThereDuplicates", () => {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
  expect(areThereDuplicates(1, 2, 2, 2, 3)).toBe(true);
  expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
});

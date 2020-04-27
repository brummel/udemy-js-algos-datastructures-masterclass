function findLongestSubstring(val) {
  let maxLen = 0;
  let six = 0;
  let eix = 0;
  let charIx = {};
  while (eix < val.length) {
    const char = val[eix];
    if (charIx[char] !== undefined) {
      maxLen = Math.max(maxLen, eix - six);
      six = Math.max(six, charIx[char] + 1);
    }
    charIx[char] = eix;
    eix++;
  }
  maxLen = Math.max(maxLen, eix - six);
  return maxLen;
}

test("findLongestSubstring", () => {
  expect(findLongestSubstring("")).toBe(0);
  expect(findLongestSubstring("bbbbbbbbbbbbb")).toBe(1);
  expect(findLongestSubstring("rithmschool")).toBe(7);
  expect(findLongestSubstring("thisishowwedoit")).toBe(6);
  expect(findLongestSubstring("longestsubstring")).toBe(8);
  expect(findLongestSubstring("thecatinthehat")).toBe(7);
  expect(findLongestSubstring("thisisawesome")).toBe(6);
});

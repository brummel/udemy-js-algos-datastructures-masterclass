function naiveSearch(str, substr) {
  let count = 0;
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === substr[j]) {
      if (j + 1 === substr.length) {
        count++;
        j = 0;
      } else {
        j++;
      }
    } else {
      j = 0;
    }
  }
  return count;
}

test("naiveSearch", () => {
  expect(naiveSearch("", "")).toBe(0);
  expect(naiveSearch("", "aaa")).toBe(0);
  expect(naiveSearch("aaaa", "a")).toBe(4);
  expect(naiveSearch("abab", "a")).toBe(2);
  expect(naiveSearch("abab", "ab")).toBe(2);
  expect(naiveSearch("abcabc", "ab")).toBe(2);
  expect(naiveSearch("hallo hanswors haaslip", "ha")).toBe(3);
});

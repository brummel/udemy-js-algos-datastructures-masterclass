function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}

test("recursiveRange", () => {
  expect(recursiveRange(6)).toBe(21);
  expect(recursiveRange(10)).toBe(55);
});

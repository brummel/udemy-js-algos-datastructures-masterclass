function isSubsequence(first, second) {
  const fchars = first.split("");
  const schars = second.split("");
  let fix = 0;
  for (let six = 0; six < schars.length; six++) {
    if (fchars[fix] === schars[six]) {
      fix++;
      if (fix === fchars.length) {
        return true;
      }
    }
  }
  return false;
}

test("isSubSequence", () => {
  expect(isSubsequence("hero", "hello world")).toBe(false);
  expect(isSubsequence("abc", "abaracadabara")).toBe(true);
  expect(isSubsequence("abc", "acb")).toBe(false);
});

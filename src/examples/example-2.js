function validAnagram(first, second) {
  return areSame(getFreqCount(first), getFreqCount(second));
}

function getFreqCount(str) {
  const fc = {};
  for (const char of str) {
    fc[char] = (fc[char] || 0) + 1;
  }
  return fc;
}

function areSame(fc1, fc2) {
  if (Object.keys(fc1).length !== Object.keys(fc2).length) {
    return false;
  }

  for (const key in fc1) {
    if (fc1[key] !== fc2[key]) {
      return false;
    }
  }

  return true;
}

test("validAnagram", () => {
  expect(validAnagram("", "")).toBe(true);
  expect(validAnagram("aaz", "zza")).toBe(false);
  expect(validAnagram("anagram", "nagaram")).toBe(true);
  expect(validAnagram("awesome", "awesom")).toBe(false);
  expect(validAnagram("awesome", "awesomee")).toBe(false);
});

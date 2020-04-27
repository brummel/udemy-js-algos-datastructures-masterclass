function sameFrequency(num1, num2) {
  const freq1 = getFrequency(num1);
  const freq2 = getFrequency(num2);
  return rightMatches(freq1, freq2) && rightMatches(freq2, freq1);
}

function getFrequency(num) {
  return num
    .toString()
    .split("")
    .reduce((agg, val) => {
      if (agg[val] === undefined) agg[val] = 0;
      agg[val]++;
      return agg;
    }, {});
}

function rightMatches(left, right) {
  for (const key in left) {
    if (right[key] === undefined) {
      return false;
    }

    if (left[key] !== right[key]) {
      return false;
    }
  }
  return true;
}

test("sameFrequency", () => {
  expect(sameFrequency(1188882, 2888811)).toBe(true);
  expect(sameFrequency(34, 14)).toBe(false);
  expect(sameFrequency(22, 222)).toBe(false);
});

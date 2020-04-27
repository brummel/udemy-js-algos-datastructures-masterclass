function sumZero(arr) {
  let six = 0;
  let eix = arr.length - 1;
  while (six < eix) {
    const sum = arr[six] + arr[eix];
    if (sum < 0) {
      six++;
    } else if (sum === 0) {
      return [arr[six], arr[eix]];
    } else {
      eix--;
    }
  }
  return null;
}

test("sumZero", () => {
  expect(sumZero([])).toBe(null);
  expect(sumZero([5])).toBe(null);
  expect(sumZero([-2, -1, 0, 3])).toBe(null);
  expect(sumZero([-2, -1, 0, 1, 2, 3])).toEqual([-2, 2]);
});

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

test("power", () => {
  expect(power(2, 0)).toBe(1);
  expect(power(2, 1)).toBe(2);
  expect(power(2, 2)).toBe(4);
  expect(power(2, 4)).toBe(16);
});

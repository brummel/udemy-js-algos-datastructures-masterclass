function productOfArray(values) {
  if (values.length === 0) {
    return 1;
  }
  return values[0] * productOfArray(values.slice(1));
}

test("productOfArray", () => {
  expect(productOfArray([1, 2, 3, 10])).toBe(60);
});

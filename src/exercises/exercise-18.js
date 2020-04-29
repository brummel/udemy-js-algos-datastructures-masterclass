function flatten(input) {
  const result = [];
  const flattenHelper = (val) => {
    if (!Array.isArray(val)) {
      result.push(val);
      return;
    }
    for (const v of val) {
      flattenHelper(v);
    }
  };
  flattenHelper(input);
  return result;
}

test("flatten", () => {
  expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
  expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
  expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
});

function isPalindrone(str) {
  const reverse = (input) => {
    if (input.length === 0) {
      return "";
    }
    return reverse(input.substring(1)) + input.substring(0, 1);
  };
  return str === reverse(str);
}

test("isPalindrone", () => {
  expect(isPalindrone("")).toBe(true);
  expect(isPalindrone("aaa")).toBe(true);
  expect(isPalindrone("awesome")).toBe(false);
  expect(isPalindrone("tacocat")).toBe(true);
});

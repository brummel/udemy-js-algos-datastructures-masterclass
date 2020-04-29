function factorialIterative(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

test("factorialIterative", () => {
  expect(factorialIterative(6)).toBe(720);
  expect(factorial(6)).toBe(720);
  expect(factorialIterative(7)).toBe(5040);
  expect(factorial(7)).toBe(5040);
});

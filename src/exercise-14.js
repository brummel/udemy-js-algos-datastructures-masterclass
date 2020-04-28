let fibs = null;
let count = 0;

function fib(num) {
  count++;
  if (fibs[num] === undefined) {
    fibs[num] = fib(num - 1) + fib(num - 2);
  }
  return fibs[num];
}

beforeEach(() => {
  fibs = [0, 1, 1];
});

test("fib", () => {
  expect(fib(4)).toBe(3);
  console.log(count);
  expect(fib(10)).toBe(55);
  console.log(count);
  expect(fib(28)).toBe(317811);
  console.log(count);
  expect(fib(35)).toBe(9227465);
  console.log(count);
  console.log(fibs);
});

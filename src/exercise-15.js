function reverse(str) {
  if (str.length === 0) {
    return "";
  }
  return reverse(str.substring(1)) + str.substring(0, 1);
}

test("reverse", () => {
  expect(reverse("")).toBe("");
  expect(reverse("aaaaaaaa")).toBe("aaaaaaaa");
  expect(reverse("abc")).toBe("cba");
});

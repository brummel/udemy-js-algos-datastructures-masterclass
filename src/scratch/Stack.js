import SinglyLinkedList from "./SinglyLinkedList";

class Stack {
  constructor() {
    this._sll = new SinglyLinkedList();
  }

  get length() {
    return this._sll.length;
  }

  push(value) {
    this._sll.unshift(value);
  }

  pop() {
    return this._sll.shift();
  }
}

test("Stack", () => {
  const stack = new Stack();
  expect(stack.length).toBe(0);
  stack.push("A");
  stack.push("B");
  expect(stack.length).toBe(2);
  expect(stack.pop()).toBe("B");
  expect(stack.pop()).toBe("A");
  expect(stack.length).toBe(0);
  expect(stack.pop()).toBeNull();
});

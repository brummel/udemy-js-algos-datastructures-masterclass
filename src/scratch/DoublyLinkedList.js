class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    const node = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
    }
    return node.value;
  }
}

test("Push, pop", () => {
  const list = new DoublyLinkedList();
  expect(list.length).toBe(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  list.push("Value1");
  expect(list.length).toBe(1);
  expect(list.head).toBe(list.tail);
  list.push("Value2");
  expect(list.length).toBe(2);
  expect(list.head).not.toBe(list.tail);
  expect(list.pop()).toBe("Value2");
  expect(list.length).toBe(1);
  expect(list.head).toBe(list.tail);
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    const value = this.tail.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let node = this.head;
      while (node.next !== this.tail) {
        node = node.next;
      }
      this.tail = node;
    }
    this.length--;
    return value;
  }

  shift() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return value;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
}

test("Push, pop and length", () => {
  const list = new SinglyLinkedList();
  expect(list.length).toBe(0);
  expect(list.pop()).toBeNull();
  list.push("Value1");
  list.push("Value2");
  list.push("Value3");
  list.push("Value4");
  expect(list.length).toBe(4);
  expect(list.pop()).toBe("Value4");
  expect(list.pop()).toBe("Value3");
  expect(list.pop()).toBe("Value2");
  expect(list.head).toBe(list.tail);
  expect(list.pop()).toBe("Value1");
  expect(list.pop()).toBeNull();
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(list.length).toBe(0);
});

test("Shift", () => {
  const list = new SinglyLinkedList();
  list.push("Value1");
  list.push("Value2");
  list.push("Value3");
  list.push("Value4");
  expect(list.length).toBe(4);
  expect(list.shift()).toBe("Value1");
  expect(list.shift()).toBe("Value2");
  expect(list.length).toBe(2);
  expect(list.shift()).toBe("Value3");
  expect(list.head).toBe(list.tail);
  expect(list.shift()).toBe("Value4");
  expect(list.shift()).toBeNull();
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(list.length).toBe(0);
});

test("Unshift", () => {
  const list = new SinglyLinkedList();
  expect(list.length).toBe(0);
  list.unshift("Value1");
  list.unshift("Value2");
  list.unshift("Value3");
  list.unshift("Value4");
  expect(list.length).toBe(4);
  expect(list.pop()).toBe("Value1");
  expect(list.pop()).toBe("Value2");
  expect(list.pop()).toBe("Value3");
  expect(list.head).toBe(list.tail);
  expect(list.pop()).toBe("Value4");
  expect(list.pop()).toBeNull();
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(list.length).toBe(0);
});

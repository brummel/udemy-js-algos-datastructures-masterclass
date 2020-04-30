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

  getNode(index) {
    if (index < 0 || index >= this.length || this.length === 0) {
      return null;
    }
    let node = this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  }

  get(index) {
    const node = this.getNode(index);
    if (node) {
      return node.value;
    }
    return null;
  }

  set(index, value) {
    const node = this.getNode(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const prevNode = this.getNode(index - 1);
      const newNode = new Node(value);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prevNode = this.getNode(index - 1);
    const node = prevNode.next;
    prevNode.next = node.next;
    this.length--;
    return node.value;
  }

  reverse() {
    if (this.length === 0) {
      return;
    }
    let prevNode = this.head;
    let currentNode = prevNode.next;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    const swop = this.head;
    this.head = this.tail;
    this.tail = swop;
  }
}

export default SinglyLinkedList;

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

test("Get", () => {
  const list = new SinglyLinkedList();
  expect(list.length).toBe(0);
  expect(list.get(0)).toBeNull();
  list.push("Value1");
  list.push("Value2");
  list.push("Value3");
  list.push("Value4");
  expect(list.get(-1)).toBeNull();
  expect(list.get(4)).toBeNull();
  expect(list.get(0)).toBe("Value1");
  expect(list.get(3)).toBe("Value4");
});

test("Set", () => {
  const list = new SinglyLinkedList();
  list.push("Value1");
  list.push("Value2");
  expect(list.set(-1, "Nothing")).toBe(false);
  expect(list.set(3, "Nothing")).toBe(false);
  expect(list.get(1)).toBe("Value2");
  expect(list.set(1, "Updated")).toBe(true);
  expect(list.get(1)).toBe("Updated");
});

test("Insert", () => {
  const list = new SinglyLinkedList();
  list.push("Value1");
  list.push("Value2");
  expect(list.insert(-1)).toBe(false);
  expect(list.insert(3)).toBe(false);
  list.insert(0, "Value0");
  expect(list.get(0)).toBe("Value0");
  expect(list.length).toBe(3);
  list.insert(3, "Value3");
  expect(list.get(3)).toBe("Value3");
  list.insert(2, "Inserted");
  expect(list.get(2)).toBe("Inserted");
});

test("Remove", () => {
  const list = new SinglyLinkedList();
  list.push("Value1");
  list.push("Value2");
  list.push("Value3");
  list.push("Value4");
  list.push("Value5");
  expect(list.remove(-1)).toBe(undefined);
  expect(list.remove(5)).toBe(undefined);
  expect(list.remove(0)).toBe("Value1");
  expect(list.remove(3)).toBe("Value5");
  expect(list.remove(1)).toBe("Value3");
  expect(list.length).toBe(2);
});

test("Reverse", () => {
  const list = new SinglyLinkedList();
  list.push("Value0");
  list.push("Value1");
  list.push("Value2");
  expect(list.get(0)).toBe("Value0");
  expect(list.get(1)).toBe("Value1");
  expect(list.get(2)).toBe("Value2");
  list.reverse();
  expect(list.get(0)).toBe("Value2");
  expect(list.get(1)).toBe("Value1");
  expect(list.get(2)).toBe("Value0");
  expect(list.head.value).toBe("Value2");
  expect(list.tail.value).toBe("Value0");
});

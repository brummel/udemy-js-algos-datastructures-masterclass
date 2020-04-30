class Node {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(priority, value) {
    const node = new Node(priority, value);
    this.values.push(node);
    this._bubbleUp();
  }

  _bubbleUp() {
    let ix = this.values.length - 1;
    while (ix > 0) {
      let pix = Math.floor((ix - 1) / 2);
      if (this.values[pix].priority > this.values[ix].priority) return;
      this._swop(ix, pix);
      ix = pix;
    }
  }

  _swop(ix1, ix2) {
    const swop = this.values[ix1];
    this.values[ix1] = this.values[ix2];
    this.values[ix2] = swop;
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }
    const node = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this._bubbleDown();
    return node;
  }

  _bubbleDown() {
    let ix = 0;
    while (ix < this.values.length) {
      let lcix = 2 * ix + 1;
      if (lcix >= this.values.length) {
        break;
      }
      let rcix = 2 * ix + 2;
      let cix =
        rcix >= this.values.length ||
        this.values[lcix].priority > this.values[rcix].priority
          ? lcix
          : rcix;
      if (this.values[ix].priority < this.values[cix].priority) {
        this._swop(ix, cix);
        ix = cix;
      } else {
        break;
      }
    }
  }
}

test("PriorityQueue", () => {
  const pq = new PriorityQueue();
  pq.enqueue(1, "Talk about feelings");
  pq.enqueue(2, "Write blog");
  pq.enqueue(5, "Procrastinate");
  pq.enqueue(2, "Brush teeth");
  expect(pq.dequeue().value).toBe("Procrastinate");
  expect(pq.dequeue().value).toBe("Write blog");
  expect(pq.dequeue().value).toBe("Brush teeth");
  expect(pq.dequeue().value).toBe("Talk about feelings");
});

// This test fails and shows that order for a given priority is currently not preserved.
test("PriorityQueue multiple same", () => {
  const pq = new PriorityQueue();
  pq.enqueue(1, "Once");
  pq.enqueue(1, "Upon");
  pq.enqueue(1, "A");
  pq.enqueue(1, "Time");
  pq.enqueue(8, "Run!!");
  expect(pq.dequeue().value).toBe("Run!!");
  expect(pq.dequeue().value).toBe("Once");
  expect(pq.dequeue().value).toBe("Upon");
  expect(pq.dequeue().value).toBe("A");
  expect(pq.dequeue().value).toBe("Time");
});

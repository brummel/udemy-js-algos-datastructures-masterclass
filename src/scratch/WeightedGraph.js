class PriorityQueue {
  constructor() {
    this.data = [];
  }
  enqueue(value, priority) {
    this.data.push({ value, priority });
    this.data.sort((a, b) => b.priority - a.priority);
  }
  dequeue() {
    const item = this.data.pop();
    return item.value;
  }
  get length() {
    return this.data.length;
  }
}

class WeightedGraph {
  constructor() {
    this.vertices = {};
  }

  addVertex(name) {
    this.vertices[name] = [];
  }

  hasVertex(name) {
    return !!this.vertices[name];
  }

  addEdge(v1, v2, weight) {
    this.vertices[v1].push({ v: v2, w: weight });
    this.vertices[v2].push({ v: v1, w: weight });
  }

  areConnected(v1, v2) {
    return this.vertices[v1].some((e) => e.v === v2);
  }

  getWeight(v1, v2) {
    return this.vertices[v1].find((e) => e.v === v2).w;
  }

  removeEdge(v1, v2) {
    this.vertices[v1] = this.vertices[v1].filter((e) => e.v !== v2);
    this.vertices[v2] = this.vertices[v2].filter((e) => e.v !== v1);
  }

  removeVertex(name) {
    delete this.vertices[name];
  }

  getShortestPath(from, to) {
    const data = {};
    data[from] = { pushed: true, path: null, minw: 0 };
    const pq = new PriorityQueue();
    pq.enqueue(from, 0);
    while (pq.length) {
      const v = pq.dequeue();
      console.log(v);
      for (const e of this.vertices[v]) {
        // init data for vertice
        if (!data[e.v]) {
          data[e.v] = { pushed: false, path: null, minw: Infinity };
        }
        // caculate weight and update data if shortest to vertice
        const w = data[v].minw + e.w;
        if (w < data[e.v].minw) {
          data[e.v].path = v;
          data[e.v].minw = w;
        }
        // add vertice to queue if it has not been added before and is not the final target
        if (!data[e.v].pushed) {
          pq.enqueue(e.v, w);
          data[e.v].pushed = true;
        }
      }
    }
    console.log(data);
    const result = [];
    let v = to;
    while (data[v]) {
      result.push(v);
      v = data[v].path;
    }
    result.reverse();
    return result;
  }
}

test("Poor man's priority queue", () => {
  const pq = new PriorityQueue();
  expect(pq.length).toBe(0);
  pq.enqueue("Four", 4);
  pq.enqueue("Seven", 7);
  pq.enqueue("Two", 2);
  expect(pq.length).toBe(3);
  expect(pq.dequeue()).toBe("Two");
  expect(pq.dequeue()).toBe("Four");
  expect(pq.dequeue()).toBe("Seven");
  expect(pq.length).toBe(0);
});

test("WeightedGraph", () => {
  const g = new WeightedGraph();
  expect(g.hasVertex("JHB")).toBe(false);
  g.addVertex("JHB");
  expect(g.hasVertex("JHB")).toBe(true);
  g.addVertex("CPT");
  expect(g.areConnected("JHB", "JHB")).toBe(false);
  expect(g.areConnected("JHB", "CPT")).toBe(false);
  expect(g.areConnected("CPT", "JHB")).toBe(false);
  g.addEdge("JHB", "CPT", 1500);
  expect(g.areConnected("JHB", "CPT")).toBe(true);
  expect(g.areConnected("CPT", "JHB")).toBe(true);
  expect(g.getWeight("JHB", "CPT")).toBe(1500);
  expect(g.getWeight("CPT", "JHB")).toBe(1500);
  g.removeEdge("CPT", "JHB");
  expect(g.areConnected("JHB", "CPT")).toBe(false);
  expect(g.areConnected("CPT", "JHB")).toBe(false);
  g.removeVertex("JHB");
  expect(g.hasVertex("JHB")).toBe(false);
});

test("Djikstra's algorithm", () => {
  const g = new WeightedGraph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");
  g.addEdge("A", "B", 4);
  g.addEdge("A", "C", 2);
  g.addEdge("B", "E", 3);
  g.addEdge("C", "D", 2);
  g.addEdge("C", "F", 4);
  g.addEdge("D", "F", 1);
  g.addEdge("D", "E", 3);
  g.addEdge("F", "E", 1);
  expect(g.getShortestPath("A", "B")).toEqual(["A", "B"]);
  expect(g.getShortestPath("A", "C")).toEqual(["A", "C"]);
  expect(g.getShortestPath("A", "D")).toEqual(["A", "C", "D"]);
  expect(g.getShortestPath("A", "E")).toEqual(["A", "C", "D", "F", "E"]);
  expect(g.getShortestPath("A", "F")).toEqual(["A", "C", "D", "F"]);
});

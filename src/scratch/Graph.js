class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(name) {
    this.vertices[name] = [];
  }

  hasVertex(name) {
    return !!this.vertices[name];
  }

  addEdge(v1, v2) {
    this.vertices[v1].push(v2);
    this.vertices[v2].push(v1);
  }

  areConnected(v1, v2) {
    return this.vertices[v1].some((e) => e === v2);
  }

  removeEdge(v1, v2) {
    this.vertices[v1] = this.vertices[v1].filter((e) => e !== v2);
    this.vertices[v2] = this.vertices[v2].filter((e) => e !== v1);
  }

  removeVertex(name) {
    delete this.vertices[name];
  }

  dfs(start) {
    const result = [];
    const visited = {};
    const traverse = (v) => {
      result.push(v);
      visited[v] = true;
      for (const e of this.vertices[v]) {
        if (visited[e]) {
          continue;
        } else {
          traverse(e);
        }
      }
      return;
    };
    traverse(start);
    return result;
  }

  dfs_iterative(start) {
    const result = [];
    const pushed = {};
    const stack = [];
    stack.push(start);
    pushed[start] = true;
    while (stack.length > 0) {
      const v = stack.pop();
      result.push(v);
      for (const e of this.vertices[v]) {
        if (!pushed[e]) {
          stack.push(e);
          pushed[e] = true;
        }
      }
    }
    return result;
  }

  bfs_iterative(start) {
    const result = [];
    const queue = [start];
    const pushed = {};
    pushed[start] = true;
    while (queue.length > 0) {
      const v = queue.shift();
      result.push(v);
      for (const e of this.vertices[v]) {
        if (!pushed[e]) {
          queue.push(e);
          pushed[e] = true;
        }
      }
    }
    return result;
  }
}

test("Graph", () => {
  const g = new Graph();
  expect(g.hasVertex("JHB")).toBe(false);
  g.addVertex("JHB");
  expect(g.hasVertex("JHB")).toBe(true);
  g.addVertex("CPT");
  expect(g.areConnected("JHB", "JHB")).toBe(false);
  expect(g.areConnected("JHB", "CPT")).toBe(false);
  expect(g.areConnected("CPT", "JHB")).toBe(false);
  g.addEdge("JHB", "CPT");
  expect(g.areConnected("JHB", "CPT")).toBe(true);
  expect(g.areConnected("CPT", "JHB")).toBe(true);
  g.removeEdge("CPT", "JHB");
  expect(g.areConnected("JHB", "CPT")).toBe(false);
  expect(g.areConnected("CPT", "JHB")).toBe(false);
  g.removeVertex("JHB");
  expect(g.hasVertex("JHB")).toBe(false);
});

test("Graph traversal", () => {
  const g = new Graph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("F", "E");
  g.addEdge("E", "C");
  expect(g.dfs("A")).toEqual(["A", "B", "D", "E", "F", "C"]);
  expect(g.dfs_iterative("A")).toEqual(["A", "C", "E", "F", "D", "B"]);
  expect(g.bfs_iterative("A")).toEqual(["A", "B", "C", "D", "E", "F"]);
});

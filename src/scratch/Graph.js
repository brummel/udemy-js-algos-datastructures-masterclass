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

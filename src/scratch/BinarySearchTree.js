class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let currentNode = this.root;
    //eslint-disable-next-line no-constant-condition
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.right == null) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      } else {
        return; // values are equal
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return value;
      }
      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right;
    }
    return null;
  }

  bfs() {
    const result = [];
    const traverse = (nodes) => {
      if (nodes.length === 0) {
        return;
      }
      const children = [];
      for (const node of nodes) {
        result.push(node.value);
        if (node.left) children.push(node.left);
        if (node.right) children.push(node.right);
      }
      traverse(children);
    };
    if (this.root) traverse([this.root]);
    return result;
  }

  bfs_iterative() {
    const result = [];
    const queue = [];
    if (this.root) queue.push(this.root);
    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  dfs_preorder() {
    const result = [];
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  dfs_postorder() {
    const result = [];
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  dfs_inorder() {
    const result = [];
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
}

test("BinarySearchTree", () => {
  const bst = new BinarySearchTree();
  bst.insert(3);
  bst.insert(2);
  bst.insert(7);
  bst.insert(9);
  bst.insert(1);
  expect(bst.root.value).toBe(3);
  expect(bst.root.left.value).toBe(2);
  expect(bst.root.right.value).toBe(7);
  expect(bst.root.right.right.value).toBe(9);
  expect(bst.root.left.left.value).toBe(1);
  expect(bst.find(0)).toBe(null);
  expect(bst.find(6)).toBe(null);
  expect(bst.find(1)).toBe(1);
  expect(bst.find(7)).toBe(7);
});

test("BinarySearchTree Traversal", () => {
  const bst = new BinarySearchTree();
  expect(bst.bfs()).toEqual([]);
  expect(bst.bfs_iterative()).toEqual([]);
  expect(bst.dfs_preorder()).toEqual([]);
  expect(bst.dfs_postorder()).toEqual([]);
  expect(bst.dfs_inorder()).toEqual([]);
  bst.insert(10);
  bst.insert(6);
  bst.insert(3);
  bst.insert(8);
  bst.insert(15);
  bst.insert(20);
  bst.insert(43);
  expect(bst.bfs()).toEqual([10, 6, 15, 3, 8, 20, 43]);
  expect(bst.bfs_iterative()).toEqual([10, 6, 15, 3, 8, 20, 43]);
  expect(bst.dfs_preorder()).toEqual([10, 6, 3, 8, 15, 20, 43]);
  expect(bst.dfs_postorder()).toEqual([3, 8, 6, 43, 20, 15, 10]);
  expect(bst.dfs_inorder()).toEqual([3, 6, 8, 10, 15, 20, 43]);
});

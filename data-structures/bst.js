// Binary Search Tree
// Insertion O(log n)
// Search O(log n)

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return true;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = node;
            return true;
          } else current = current.left;
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = node;
            return true;
          } else current = current.right;
        } else return false;
      }
    }
  }

  find(val) {
    if (val === this.root.val) return this.root;
    else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) return false;
          else if (current.left.val === val) {
            return current.left;
          } else current = current.left;
        } else if (val > current.val) {
          if (current.right === null) return false;
          else if (current.right.val === val) {
            return current.right;
          } else current = current.right;
        } else if (val === current.val) return current;
        else return false;
      }
    }
  }

  breadthFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  depthFirstSearchPre() {
    let node = this.root;
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return data;
  }

  depthFirstSearchPost() {
    let node = this.root;
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(node);
    return data;
  }

  depthFirstSearchIn() {
    let node = this.root;
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(12);
tree.insert(2);
tree.insert(9);
tree.insert(15);

console.log(tree);

// Stack
// LIFO principle
// Insertion O(1)
// Removal O(1)
// Searching O(n)
// Traversal O(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    return ++this.length;
  }

  pop() {
    let temp = this.first;
    if (this.length === 0) return null;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return temp;
  }
}

let stack = new Stack();
stack.push("Hello");
stack.push("World");
stack.push("!");
stack.pop();
console.log(stack);

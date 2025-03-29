// Queue
// FIFO principle
// Insertion O(1)
// Removal O(1)
// Search O(n)
// Traversal O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.length;
  }

  dequeue() {
    if (this.length === 0) return null;
    let temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return temp;
  }
}

let queue = new Queue();
queue.enqueue("Hello");
queue.enqueue("World");
queue.enqueue("!");
queue.dequeue();
console.log(queue);

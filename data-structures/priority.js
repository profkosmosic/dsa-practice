// Priority Queue
// Insertion O(log n)
// Removal O(log n)
// Search O(n)

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority < parent.priority) {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[0];
    while (true) {
      let left, right;
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swap = null;

      if (leftIndex < this.values.length) {
        left = this.values[leftIndex];
        if (left.priority < element.priority) swap = leftIndex;
      }

      if (rightIndex < this.values.length) {
        right = this.values[rightIndex];
        if (right.priority < element.priority && right.priority < left.priority)
          swap = rightIndex;
      }

      if (swap === null) break;
      else {
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let queue = new PriorityQueue();
queue.enqueue("test mid", 2);
queue.enqueue("test high", 1);
queue.enqueue("test low", 3);
queue.dequeue();
console.log(queue);

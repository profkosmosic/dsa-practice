// Singly Linked List
// Insertion O(1)
// Removal O(1) || O(n)
// Search O(n)
// Traverse O(n)

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
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return node;
  }

  pop() {
    let currentNode = this.head;
    if (!this.head) return undefined;
    while (currentNode) {
      if (currentNode.next === this.tail || this.length === 1) {
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  shift() {
    let currentNode = this.head;
    if (!this.head) return undefined;
    this.head = currentNode.next;
    this.length--;
    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return node;
  }

  get(index) {
    let currentNode = this.head;
    let counter = 0;
    if (index >= this.length || index < 0) return null;
    while (counter++ !== index) currentNode = currentNode.next;
    return currentNode;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index > this.length || index < 0) return false;
    let node = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = node;
    node.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) {
      this.shift();
      return true;
    }

    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    if (index > this.length || index < 0) return false;
    let prevNode = this.get(index - 1);
    let currentNode = this.get(index);
    prevNode.next = currentNode.next;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevNode = null;
    let nextNode;
    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");
console.log(list);

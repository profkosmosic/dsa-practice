// Doubly Linked List
// Insertion O(1)
// Removal O(1)
// Search O(n)
// Traverse O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        }

        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return node;
    }

    pop() {
        let tail = this.tail;
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }

        this.length--;
        return tail;
    }

    shift() {
        let head = this.head;
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.head = head.next;
            this.head.prev = null;
            head.next = null;
        }

        this.length--;
        return head;
    }

    unshift(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        }

        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return node;
    }

    get(index) {
        let currentNode;
        let half = Math.floor(this.length / 2);
        if(index >= this.length || index < 0) return null;
        if(index <= half) {
            currentNode = this.head;
            for(let i = 0; i <= half; i++) {
                if(i === index) return currentNode;
                currentNode = currentNode.next;
            }
        }

        else {
            currentNode = this.tail;
            for(let i = this.length - 1; i > half; i--) {
                if(i === index) return currentNode;
                currentNode = currentNode.prev;
            }
        }
    }

    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index === 0) {
            this.unshift(val);
            return true;
        }

        if(index === this.length) {
            this.push(val);
            return true;
        }

        if(index >= this.length || index < 0) return false;
        let node = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        prevNode.next = node;
        node.next = nextNode;
        node.prev = prevNode;
        nextNode.prev = node;
        this.length++;
        return true;
    }

    remove(index) {
        if(index === 0) {
            this.shift();
            return true;
        }

        if(index === this.length - 1) {
            this.pop();
            return true;
        }

        if(index >= this.length || index < 0) return false;
        let node = this.get(index);
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.next = null;
        node.prev = null;
        this.length--;
        return true;
    }
}

let list = new DoublyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");
list.push("?");
list.remove(2);
console.log(list.get(1));
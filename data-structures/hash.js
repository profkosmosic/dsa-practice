// Hash Table
// Insertion O(1)
// Removal O(1)
// Access O(1)

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0]))
            keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

let hashtable = new HashTable();
hashtable.set("hi", "bye");
hashtable.set("hello", "goodbye");
hashtable.set("greetings", "farewell");
console.log(hashtable);
console.log(hashtable.get("hello"));
console.log(hashtable.keys());

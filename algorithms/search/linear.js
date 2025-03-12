// Linear Search
// Time Complexity: O(n)

let arr = [23, 1, 8, 53, 24];
let target = 53;

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) return i;
    }
    return -1;
}

console.log("Array: " + arr);
console.log("Target: " + target);
console.log("Index: " + linearSearch(arr, target));
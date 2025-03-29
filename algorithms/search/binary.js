// Binary Search
// Time Complexity: O(log n)
// Array needs to be sorted

let arr = [1, 8, 23, 24, 53];
let target = 24;

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  let mid;
  for (let i = min; i < arr.length; i++) {
    mid = Math.round((min + max) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) min = mid;
    if (arr[mid] > target) max = mid;
  }
  return -1;
}

console.log("Array: " + arr);
console.log("Target: " + target);
console.log("Index: " + binarySearch(arr, target));

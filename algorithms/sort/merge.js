// Merge Sort
// Time Complexity: O(n log n)

let arr = [23, 1, 8, 53, 24];

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  // Compares arrays and adds smaller element to result
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  // Adds to result whatever is left over
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log("Before: " + arr);
console.log("After: " + mergeSort(arr));

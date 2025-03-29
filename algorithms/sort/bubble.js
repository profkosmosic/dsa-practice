// Bubble Sort
// Time Complexity: O(n²)

let arr = [23, 1, 8, 53, 24];

function bubbleSort(arr) {
  let largest;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        largest = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = largest;
      }
    }
  }
  return arr;
}

console.log("Before: " + arr);
console.log("After: " + bubbleSort(arr));

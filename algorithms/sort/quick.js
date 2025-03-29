// Quick Sort
// Time Complexity: O(n log n)

let arr = [23, 1, 8, 53, 24];

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let indexToSwap = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      indexToSwap++;
      swap(arr, indexToSwap, i);
    }
  }

  swap(arr, start, indexToSwap);
  return indexToSwap;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log("Before: " + arr);
console.log("After: " + quickSort(arr));

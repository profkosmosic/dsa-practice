// Selection Sort
// Time Complexity: O(n²)

let arr = [23, 1, 8, 53, 24];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) smallest = j;
    }
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
  return arr;
}

console.log("Before: " + arr);
console.log("After: " + selectionSort(arr));

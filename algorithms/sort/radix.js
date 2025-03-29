// Radix Sort
// Time Complexity: O(nk)

let arr = [23, 1, 8, 53, 24];

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getDigitCount(num) {
  return String(num).length;
}

function getHighestDigitCount(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (getDigitCount(arr[i]) > max) max = getDigitCount(arr[i]);
  }
  return max;
}

function radixSort(arr) {
  let maxCount = getHighestDigitCount(arr);
  for (let i = 0; i < maxCount; i++) {
    let digitSpaces = Array.from({ length: 10 }, () => []);
    for (let k = 0; k < arr.length; k++) {
      let digit = getDigit(arr[k], i);
      digitSpaces[digit].push(arr[k]);
    }
    arr = [].concat(...digitSpaces);
  }
  return arr;
}

console.log("Before: " + arr);
console.log("After: " + radixSort(arr));

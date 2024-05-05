//! Day 22 : Find MEDIAN

//? Q: WAF findMedian() that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//* Constraints/Tips:
// Sort the array in ascending order.
// if the array has odd number of elements, the median value is the middle one.
// if the array has even number of elements, the median value is the average of the two middle elements.

//? Sol:

const findMedian = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let midIndex = Math.floor(arr.length / 2);
  if (arr.length === 0) {
    return 0;
  } else if (arr.length % 2 !== 0) {
    return arr[midIndex];
  } else {
    return (arr[midIndex] + arr[midIndex - 1]) / 2;
  }
};

console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
console.log(findMedian([2, 4, 6, 8])); // Output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6
console.log(findMedian([])); // Output: 0

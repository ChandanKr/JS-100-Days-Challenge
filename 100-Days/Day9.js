//! Day 9 : Calculate average

//? Q: WAF calcAverage() that takes an array of numbers as input and returns the average of those numbers.

//* Constraints:
// The function should accept an array of numbers as input.

//? Sol:

const calcAverage = (arr) => {
  let totalSum = arr.reduce((accum, currElem) => {
    return currElem + accum;
  }, 0);
  return totalSum / arr.length;
};

console.log(calcAverage([5, 6, 7])); // Output: 6
console.log(calcAverage([1, 52, 8, 10, 5])); // Output: 15.2
console.log(calcAverage([10, 5, 2, 8])); // Output: 6.25

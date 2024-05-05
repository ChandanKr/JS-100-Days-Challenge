//! Day 21 : Calculate MEAN

//? Q: WAF calcMean() that takes an array of numbers as input and returns the mean (average) of these numbers.

//todo: In maths, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection  of numbers.

//* Constraints:
// The input array may contain positive and negative integers.
// The input array may be empty, If it is empty, the function should return 0.

//? Sol:

const calcMean = (arr) => {
  let sum = arr.reduce((acc, currElem) => acc + currElem, 0);

  if (arr.length === 0) {
    return 0;
  } else {
    return sum / arr.length;
  }
};

console.log(calcMean([1, 2, 3, 4, 5])); // Output: 3
console.log(calcMean([10, 20, 30])); // Output: 20
console.log(calcMean([-1, 0, 1])); // Output: 0
console.log(calcMean([])); // Output: 0

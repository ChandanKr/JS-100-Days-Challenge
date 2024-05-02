//! Day 15 : Sum of Squares of all element of an array

//? Q: WAF sumOfSquares() that takes aa array as input, that calculates Sum of Squares of all element in the array.

//? Sol:

const sumOfSquares = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc + curr * curr;
  }, 0);
};

console.log(sumOfSquares([1, 2, 3, 4])); // Output: 30
console.log(sumOfSquares([4, 5, 3, 4])); // Output: 66
console.log(sumOfSquares([5, 4])); // Output: 41

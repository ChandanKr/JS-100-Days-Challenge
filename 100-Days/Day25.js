//! Day 25 : Find Factorial of a number using recursion

//? Q: WAF factorial() that takes a non-negative integer as input and return it's factorial with the use of recursion function.

//* Constraints:
// The function should work for any non-negative integer input.
// The factorial of 0 is defined as 1.

//? Sol:

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n * factorial(n-1)
    return n * factorial(n - 1);
  }
};

console.log(factorial(3)); // Output: 6
console.log(factorial(6)); // Output: 720
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1

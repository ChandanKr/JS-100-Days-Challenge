//! Day 26 : Fibonacci Using Recursion

//? Q: WAF fibonacci() that takes a non-negative integer as input and return the nth Fibonacci number.

//? Fibonacci Numbers: 0, 1, 1, 2, 3, 5, 8, 12, 20, 32, ... so on

//* Constraints:
// The function should work for any non-negative integer input.
// The factorial of 0 is defined as 1.

//? Sol:

const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5

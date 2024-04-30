//! Day 8 : Find Factorial of a number

//? Q: WAF factorial() that takes a non-negative integer as input and return it's factorial.

//* Constraints:
// The function should work for any non-negative integer input.
// The factorial of 0 is defined as 1.

//? Sol:

const factorial = (n) => {
  //* Method 1: Using for loop
  //   let result = 1;
  //   for (let i = 1; i <= n; i++) {
  //     result = result * i;
  //   }
  //   return result;

  //* Method 2: Using recursive function
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

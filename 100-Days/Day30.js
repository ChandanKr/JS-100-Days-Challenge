//! Day 30 : Recursive Number Range Generator

//? Q: Write a recursive function, generateNumRangeRecursive() that generates an array containing consecutive numbers from a to b(inclusive) using recursion.

//* Input:
// a: An integer representing the starting number of the range.
// b: An integer representing the ending number of the range.
// arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
// An array containing consecutive numbers from a to b(inclusive).

//* Constraints:
// a and b will be integers.
// a <= b

//? Sol:
const generateNumRangeRecursive = (a, b, arr = []) => {
  if (a <= b) {
    arr.push(a);
    return generateNumRangeRecursive(a + 1, b, arr);
  }
  return arr;
};

console.log(generateNumRangeRecursive(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
console.log(generateNumRangeRecursive(3, 7)); // Output: [3, 4, 5, 6, 7]
console.log(generateNumRangeRecursive(-2, 2)); // Output: [-2, -1, 0, 1, 2]

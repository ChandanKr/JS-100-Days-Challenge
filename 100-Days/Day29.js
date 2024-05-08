//! Day 29 : Number Range Generator

//? Q: WAF generateNumRange() that generates an array containing consecutive numbers from a to b(inclusive).

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
const generateNumRange = (a, b) => {
  let arr = [];
  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
};

console.log(generateNumRange(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
console.log(generateNumRange(3, 7)); // Output: [3, 4, 5, 6, 7]
console.log(generateNumRange(-2, 2)); // Output: [-2, -1, 0, 1, 2]

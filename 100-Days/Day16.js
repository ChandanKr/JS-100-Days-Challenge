//! Day 16 : Find minimum value from a given array

//? Q: WAF findMin() that takes an array of numbers as input and returns the minimum number in the array.

//? Sol:

const findMin = (arr) => {
  //* Method 1: Using sort() method
//   arr = arr.sort((a, b) => a - b);
//   return arr[0];

  //* Method 2: Using Math object (Math.min())
  return Math.min(...arr);
};

console.log(findMin([1, 52, 8, 10, 5])); // Output:  1
console.log(findMin([-10, -5, -3, -9, -2])); // Output:  -10
console.log(findMin([5])); // Output:  5

//! Day 7 : Find maximum from a given array

//? Q: WAF findMax() that takes an array of numbers as input and returns the maximum number in the array.

//? Sol:

const findMax = (arr) => {
  //* Method 1: Using sort() method
  //   arr = arr.sort((a, b) => b - a);
  //   return arr[0];

  //* Method 2: Using Math object (Math.max())
  return Math.max(...arr);
};

console.log(findMax([1, 52, 8, 10, 5])); // Output:  52
console.log(findMax([-10, -5, -3, -9, -2])); // Output:  -2
console.log(findMax([5])); // Output:  5

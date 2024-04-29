//! Day 5 : Sort an Array (of numbers)

//? Q: WAF sortAscending() to sort an array of numbers in an ascending order.

//* Constraints:
// The function should take an array of numbers as input.
// It should return a new array with the numbers sorted in ascending order.
// The original array should remain unchanged.
// Use both a) with inbuilt method b) without inbuilt method.

//? Sol:

//* Method 1: with inbuilt method.
// const sortAscending = (arr) => {
//   // Create a copy of the original array to avoid mutating it
//   const newArr = arr.slice();
//   return newArr.sort((a, b) => a - b);
// };

//* Method 1: without inbuilt method.
const sortAscending = (arr) => {
  // Create a copy of the original array to avoid mutating it
  const newArr = arr.slice();
  // Implementing bubble sort algorithm
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - 1 - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        // Swap elements if they are in the wrong order
        const temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  return newArr;
};

const originalArray = [5, 3, 40, 51, 10];

console.log(sortAscending(originalArray)); // Output: [3, 5, 10, 40, 51]
console.log(originalArray); // Output: [5, 3, 40, 51, 10]

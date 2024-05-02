//! Day 12 : Remove Duplicates From Array

//? Q: WAF removeDuplicates() that takes an array of integers as input and removes all the duplicate elements, returning a new array with only unique elements.

//* Constraints:
// The input array may contain both positive and negative integers.
// The input array may be empty.
// The elements in the input array are not guaranteed to be sorted.
// The out array should retain the original order of elements from the input array.

//? Sol:

const removeDuplicates = (arr) => {
  // Step 1: Create a Set using Set constructor
  let newArr = new Set(arr);

  // Step 2: Convert the Set, back to an array using spread operator
  return [...newArr];
};

console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // Output: [5, 6, 7, 8, 9]
console.log(removeDuplicates([1, 2, 3, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([1, -2, -2, 3, 4])); // Output: [1, -2, 3, 4]
console.log(removeDuplicates([])); // Output: []

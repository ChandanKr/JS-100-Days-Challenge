//! Day 34 : Remove Duplicates from an Array

//? Q: Write a function, removeDuplicates() that takes an array of elements as input and returns a new array with all unique elements inside it.

//* Constraints:
// The input array may contain elements of any data type.
// The returned array contains only unique elements from the input array.
// The order of elements in the output array should be the same as the input array.

//? Sol:
const removeDuplicates = (arr) => {
  let newArr = new Set(arr);
  return [...newArr];
};

console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "c", "b", "a", "d"])); // Output: [ 'a', 'b', 'c', 'd' ]

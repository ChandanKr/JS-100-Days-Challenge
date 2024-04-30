//! Day 10 : Are arrays EQUAL?

//? Q: WAF arraysAreEqual() that takes two arrays aar1 and arr2 as input and returns "True", if the arrays are equal (i.e., contains the same elements in same order), "False" otherwise.

//* Constraints:
// The function should should return false if the arrays have different lengths.

//? Sol:

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((currElem, index) => currElem === arr2[index]);
};

console.log(arraysAreEqual([4, 5, 6, 7], [5, 6, 7])); // Output: False
console.log(arraysAreEqual([5, 6, 7], [5, 6, 7])); // Output: True
console.log(arraysAreEqual([5, 6, 7], [5, 6, 8])); // Output: False
console.log(arraysAreEqual([], [])); // Output: True
console.log(arraysAreEqual([5, 6, 7], [5, 7, 6])); // Output: false

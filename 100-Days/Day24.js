//! Day 24 : Find MODE

//? Q: WAF findMode() that takes an array of numbers as input and returns the mode value (the number that appears most frequently).

//* Constraints:
// The input array will always contain at least one element.
// The mode will always be unique(i.e., there won't be multiple numbers with the same highest frequency).

//? Sol:

const findMode = (arr) => {
  let counts = {};
  let maxVal = 0;
  let mode;
  for (let elements of arr) {
    counts[elements] = (counts[elements] || 0) + 1;
    if (counts[elements] > maxVal) {
      maxVal = counts[elements];
      mode = elements;
    }
  }
  return mode;
};

console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2

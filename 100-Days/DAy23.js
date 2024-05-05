//! Day 23 : Count Occurrence of Elements in an array

// ? Q: WAF countElemOccurrence() to count the number of occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of occurrence.

//* Constraints:
// The input array may contain positive integers only.
// The input array should not be empty.

//? Sol:

const countElemOccurrence = (arr) => {
  let counts = {};
  for (let elements of arr) {
    counts[elements] = (counts[elements] || 0) + 1;
  }
  return counts;
};

console.log(countElemOccurrence([1, 2, 2, 3, 1, 4, 2])); // Output: { '1': 2, '2': 3, '3': 1, '4': 1 }



// +++++++++++++++++++++++++++++++++++++
//! Please Note
// +++++++++++++++++++++++++++++++++++++

// counts[elements] || 0 checks if "elements" exists as a key in "counts". If it doesn't exist, it returns 0.

// (counts[elements] || 0) + 1 increments the count of "elements" by 1.

// counts[elements] = (counts[elements] || 0) + 1; assigns the incremented count back to counts[elements].

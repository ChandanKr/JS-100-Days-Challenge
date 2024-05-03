//! Day 18 : check UPPERCASE or lowercase

//? Q: WAF checkCharValue() that takes a character as input and returns "UPPERCASE" for uppercase value, and "lowercase" for lowercase value.

//* Constraints:
// The input char will be a single character.
// The character can be any printable ASCII character.
// You can assume that the input will always be a string of length 1.

//? Sol:

//* Method 1: compare with ASCII value
// const checkCharValue = (charStr) => {
//   if (charStr.charCodeAt(0) >= 65 && charStr.charCodeAt(0) <= 90) {
//     return "UPPERCASE";
//   }

//   return "lowercase";
// };

//* Method 2: convert and check
const checkCharValue = (charStr) => {
  if (charStr === charStr.toUpperCase()) {
    return "UPPERCASE";
  }
  return "lowercase";
};

console.log(checkCharValue("a")); // Output: lowercase
console.log(checkCharValue("S")); // Output: UPPERCASE
console.log(checkCharValue("w")); // Output: lowercase
console.log(checkCharValue("Z")); // Output: UPPERCASE

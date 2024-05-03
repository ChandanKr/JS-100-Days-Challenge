//! Day 20 : Reverse a String

//? Q: WAF reverseString() that takes a string as input and return the revered value of this string.

//? Sol:

//* Method 1: with inbuilt method => reverse()
// const reverseString = (str) => {
//   return str.trim().split("").reverse().join("");
// };

//* Method 2: without using inbuilt method
const reverseString = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

console.log(reverseString("hello")); // Output: olleh
console.log(reverseString("Chandan")); // Output: nadnahC

//! Day 19 : check string starts with given substring or not

//? Q: WAF startsWithSubstring() that takes a string and a substring as input and check whether the input string starts with given substring or not.

//* Constraints:
// str: A String (e.g., "Hello World")
// subStr: A substring to check if it starts the given string (e.g., "Hello")
// it should be case-insensitive.
// Output: "true" - if the input string starts with given substring, "false" otherwise.

//? Sol:

//* Method 1: Compare and check
// const startsWithSubstring = (str, subStr) => {
//   if (str.trim().toLowerCase().split(" ")[0] === subStr.trim().toLowerCase()) {
//     return true;
//   }
//   return false;
// };

//* Method 2: use inbuilt method: startsWith()
const startsWithSubstring = (str, subStr) => {
    return str.trim().toLowerCase().startsWith(subStr.trim().toLowerCase());
  };
  
  console.log(startsWithSubstring("Hello world", "hello")); // Output: true
  console.log(startsWithSubstring("Hello world", "world")); // Output: false
  
//! Finding Longest Word in a String

//? Q: WAF findLongestWord() that takes a string as input and returns longest word from that string. If there are multiple longest words, return the first one encountered.

//* Constraints:
// The input string may contains alphabetic characters, digits, spaces, and punctuations.
// The input string is non-empty.
// the input string may contain multiple words separated by spaces.

//* Note:
// If the input string is empty or contains only whitespace, the function should return "false".
// The function should ignore leading and trailing whitespace when determining the longest word.

//? Sol:

//* Method 1: without using inbuilt methods
// const findLongestWord = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   const words = str.split(" ");
//   let longestStr = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestStr.length) {
//       longestStr = words[i];
//     }
//   }
//   return longestStr;
// };

//* Method 2: Using inbuilt SORT method
// const findLongestWord = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }

//   words = str.split(" ");
//   words = words.sort((a, b) => b.length - a.length);

//   return words.at(0);
// };

//* Method 2: Using inbuilt REDUCE method
const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  return words.reduce(
    (accum, currElem) => (currElem.length > accum.length ? currElem : accum),
    ""
  );
};

console.log(
  //   findLongestWord(" ")
  findLongestWord("This is my first day of this javascript 100 days challenge.")
);

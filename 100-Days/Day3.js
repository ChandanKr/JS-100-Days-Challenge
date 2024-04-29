//! Day 3 : Count Occurrence of Character

//? Q: WAF countChar() that takes two parameters: a) string and b) character to count, and return the total count of occurrence of the character in parameter.

//* Constraints:
// The function should return the number of times the specified characters appears in the string.

//* Note:
// The function should be case-insensitive.
// The function should handle both lowercase and uppercase characters.
// The character parameter can be printable ASCII character (The function should accept any character that is part of the ASCII character set and is printable)

//? Sol:

const countChar = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();

  strChars = str.split("");

  //* Method 1: Using map() method
  // let count = 0;
  // strChars.map((item) => {
  //   if (item === char) count++;
  // });
  // return count;

  //* Method 2: Using reduce() method
  totalCount = strChars.reduce((accum, currChar) => {
    if (currChar === char) accum++;
    return accum;
  }, 0);
  return totalCount;
};

console.log(countChar("chandan the developer", "e")); // Output: 4
console.log(countChar("MissIssipIi", "I")); // Output: 5

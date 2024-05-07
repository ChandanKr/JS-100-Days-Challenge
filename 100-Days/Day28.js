//! Day 28 : Truncate a String

//? Q: WAF truncateString() that takes two parameters as input: str and maxLength. The function should truncate the input string str, if it's length exceeds the specified maxLength. If truncation occurs, the function should add "..." to the end of the truncated string.

// str: A string that needs to be truncated.
// maxLength: An integer representing the maximum length of string allowed.

//* Constraints:
// The input string str will contain only alphanumeric characters and punctuation marks.
// The maximum length maxLength will be a positive integer.
// The output string length should not exceed maxLength + 3 characters due to the addition of "..."

//? Sol:
const truncateString = (str, maxLength) => {
  return maxLength <= 0 ? str : str.slice(0, maxLength).concat("...");
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // Output: A-tisket...
console.log(truncateString("A-tisket a-tasket", 0)); // Output: A-tisket a-tasket

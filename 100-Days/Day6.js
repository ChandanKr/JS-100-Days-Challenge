//! Day 6 : String Palindrome

//? Q: WAF isPalindrome() to determine whether a given string is a palindrome or not.

//* Definition: A Palindrome is a word, phrase, number, or other sequence of characters that reads the same from both forward and backward, ignoring spaces, punctuation, and capitalization.

//* Constraints:
// The input string may contain letters, digits, spaces, punctuations, and special characters.
// The function should be case-insensitive.
// It should ignore spaces, punctuation, and special characters when determining.
// It should return "True" if string is palindrome, otherwise return "False".

//? Sol:

const isPalindrome = (str) => {
  originalStr = str.toLowerCase().replace(/\W/g, "");
  let reverseStr = originalStr.split("").reverse().join("");

  return originalStr === reverseStr
    ? `True - "${str}" is a Palindrome.`
    : `False - "${str}" is not a Palindrome.`;
};

console.log(isPalindrome("Racecar")); // Output: True - "Racecar" is a Palindrome.
console.log(isPalindrome("hello")); // Output: False - "hello" is not a Palindrome.
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: True - "A man, a plan, a canal, Panama" is a Palindrome.

//!===========================================================================================
//? Special Note:

//* .replace(/\W/g, ""):
// It uses the replace() method with a regular expression (/\W/g) to remove all non-words characters (including spaces, punctuation, and special characters) from the string.

//* \W :
// It matches any non-word characters (equivalent to [^a-zA-Z0-9_])

//* /g :
// The g flag performs a global match search, means it replaces all the occurrences of non-word characters in the string.

//!===========================================================================================

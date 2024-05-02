//! Day 13 : Count Number of Vowels in a String

//? Q: WAF countVowels() that takes a string as an input and returns the total count of vowels in that provided string.

//* Constraints:
// The input string may contain letters in both uppercase and lowercase.
// The output should be a non-negative integer that represents the count of vowels in the input string.

//? Sol:

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  let arr = str.split("");

  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) count++;
  }
  return count;
};

console.log(countVowels("Hello Everyone")); // Output: 6
console.log(countVowels("The Quick brown fOx")); // Output: 5
console.log(countVowels("Brrrrp")); // Output: 0
console.log(countVowels("Chandan Kumar")); // Output: 4

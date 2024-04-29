//! Hash Tag Generator

//? Q: WAF generateHash() that generate a hash tag (eg. #ChandanTheDeveloper) from a given input string ("chandan the developer").

//* Constraints:
// The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without space.
// The function should return the generated hash tag prefix with "#".

//* Note:
// The function should return "false", if:
// a) If the length of the input string is greater than 280 characters.
// b) If input string is empty or contains only whitespace.

//? Sol:

const generateHash = (str) => {
  const trimmedStr = str.trim();

  if (trimmedStr.length > 280 || trimmedStr.length === 0) return false;

  let hashStr = "#";
  let words = trimmedStr.split(" ");

  words.map((item) => {
    // hashStr += item.charAt(0).toUpperCase() + item.slice(1); // Method 1
    // hashStr += item[0].toUpperCase() + item.slice(1); // Method 2
    hashStr += item.replace(item[0], item[0].toUpperCase()); // Method 3
  });

  return hashStr;
};

// console.log(generateHash(" "));
console.log(generateHash("chandan the developer"));

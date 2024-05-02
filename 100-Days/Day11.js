//! Day 11 : Digits Sum

//? Q: WAF sumOfDigits() that takes a number as input and returns the sum of it's digits.

//* Constraints:
// The input number will always be a positive number.
// The input number can have multiple digits.

//? Sol:

//* Method 1: Converting to String and use for loop
// const sumOfDigits = (num) => {
//   let numStr = num.toString();
//   let sum = 0;

//   for (let i = 0; i < numStr.length; i++) {
//     sum += Number(numStr[i]);
//   }
//   return sum;
// };

//* Method 2: Converting to String and use reduce method
// const sumOfDigits = (num) => {
//   let numStr = num.toString();
//   let digits = numStr.split("");
//   return digits.reduce((acc, currElem) => acc + Number(currElem), 0);
// };

//* Method 3: Without Converting to String
const sumOfDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(sumOfDigits(456)); // Output: 15
console.log(sumOfDigits(473156)); // Output: 26

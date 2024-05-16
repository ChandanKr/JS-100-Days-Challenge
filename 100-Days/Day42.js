//! Day 42 : Credit Card Validation (According to Luhn Algorithm)

//? Q: Write a function, validateCreditCard() to validate a credit card using Luhn Algorithm.

//* Constraints / Requirements:
// The function takes a credit card number in a string format as input.
// The function should return "true" if the number is valid according to the Luhn Algorithm, "false" otherwise.
// Ensure the function can handle numbers as string, which may include dashes or spaces.

//* Luhn Algorithm Steps:
// Prepare the number => Start with the digits of the number, E.g., if validating the number 457835891502.
// Reverse the digits => e.g., it becomes 205198538754.
// Double Every Second Digit => 2, 0, 5, 2, 9, 16, 5, 6, 8, 14, 5, 8
// Subtract 9 from Numbers higher than 9 => 2, 0, 5, 2, 9, 7, 5, 6, 8, 5, 5, 8
// Sum All the Digits Now => 2 + 0 + 5 + 2 + 9 + 7 + 5 + 6 + 8 + 5 + 5 + 8 = 62
// Check Modulo 10 => if Sum % 10 == 0, it's a valid number according to the Luhn Algorithm.

//? Sol:
const validateCreditCard = (str) => {
  str = str.replace(/\D/g, "");
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  let reversedStrArr = reversedStr.split("");

  let doubleNum = reversedStrArr.map((curElem, index) => {
    if (index % 2 !== 0) {
      curElem = curElem * 2;
      if (curElem > 9) {
        curElem = curElem - 9;
      }
    } else {
      curElem = Number(curElem);
    }

    return curElem;
  });

  let totalSum = doubleNum.reduce((acc, curElem) => acc + curElem, 0);

  return (totalSum % 10 === 0) ? true : false;
};

console.log(validateCreditCard("4539 1488 0343 6467")); // Output: true
console.log(validateCreditCard("8273 1232 7352 0569")); // Output: false

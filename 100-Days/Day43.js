//! Day 43 : FizzBuzz Challenge

//? Q: Write a function, fizzBuzz() that accept two parameters in integer format: startNum and endNum as input and return an array containing numbers and specific strings based on following rules:

// for each number i in the range from startNum to endNum (both inclusive).
// if i is divisible by both 3 and 5, include "FizzBuzz" in the result.
// if i is divisible by only 3, include "Fizz" in the result.
// if i is divisible by only 5, include "Buzz" in the result.
// if i is neither divisible by 3 nor by 5, include i as a string itself in the result.

//? Sol:
const fizzBuzz = (startNum, endNum) => {
  let resultArr = [];

  for (let i = startNum; i <= endNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultArr.push("Fizz");
    } else if (i % 5 === 0) {
      resultArr.push("Buzz");
    } else {
      resultArr.push(i.toString());
    }
  }

  return resultArr;
};

console.log(fizzBuzz(1, 15)); // Output: [ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz' ]
console.log(fizzBuzz(12, 20)); // Output: [ 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz' ]

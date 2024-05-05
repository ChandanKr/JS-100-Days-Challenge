//! Day 27 : Repeat a String

//? Q: WAF repeatString() that takes two parameters as input: str and num, it return the repeated concatenated string with given num value.

//? Sol:

//* Method 1: Without inbuilt method
// const repeatString = (str, num) => {
//   if (num > 0) {
//     let newStr = "";
//     for (let i = 0; i < num; i++) {
//       newStr += str;
//     }
//     return newStr;
//   }

//   return str;
// };

//* Method 2: With inbuilt method
const repeatString = (str, num) => {
  return num > 0 ? str.repeat(num) : str;
};

console.log(repeatString("hello", 0)); // Output: hello
console.log(repeatString("hello", 1)); // Output: hello
console.log(repeatString("hello", 2)); // Output: hellohello
console.log(repeatString("Hello", 5)); // Output: HelloHelloHelloHelloHello

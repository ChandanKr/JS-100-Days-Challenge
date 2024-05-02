//! Day 14 : Check - is power of 2 ??

//? Q: WAF isPowerOfTwo() that takes a number as an input and returns "true" if number is a power of two, "false" otherwise.

//* Constraints:
// The input number will be a positive integer.
// Zero(0) and negative integers are not considered as power of two.

//? Sol:

const isPowerOfTwo = (number) => {
    return number > 0 && (number & (number - 1)) === 0;
};

console.log(isPowerOfTwo(8)); // Output: true
console.log(isPowerOfTwo(7)); // Output: false
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(50)); // Output: false
console.log(isPowerOfTwo(64)); // Output: true

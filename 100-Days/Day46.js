//! Day 46 : Indian Mobile Number Validation with REGEX

//? Q: Write a function, validateMobileNumber() that takes a single string parameter - mobileNumber as input.

//* The function should validate the Indian mobileNumber based on the following criteria:
// The length must be at least of 10 characters.
// The number must start with 6, 7, 8, or 9.
// The function should return "true" if the Indian mobileNumber meets all the criteria, "false" otherwise.

//* Hint: [6789][\d]{9}

//? Sol:

const validateMobileNumber = (mobileNumber) => {
  const regex = /^[6-9][\d]{9}$/;
  return regex.test(mobileNumber);
};

console.log(validateMobileNumber("9458754645")); // Output: true
console.log(validateMobileNumber("0124578963")); // Output: false
console.log(validateMobileNumber("+91475486425")); // Output: false
console.log(validateMobileNumber("8964576")); // Output: false
console.log(validateMobileNumber("76458625")); // Output: false
console.log(validateMobileNumber("6254789648")); // Output: true

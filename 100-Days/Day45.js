//! Day 45 : Password Validation with REGEX

//? Q: Write a function, validatePassword() that takes a single string parameter - password as input.

//* The function should validate the password based on the following criteria:
// The length must be at least of 8 characters.
// The password must contain at least one lowercase letter (a-z), one uppercase letter (A-Z), one digit (0-9) and one special character from the set: !@#$%^&*()-_+=
// The function should return "true" if the password meets all the criteria, "false" otherwise.

//* Hint: (?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}

//? Sol:

const validatePassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

console.log(validatePassword("sfhkjshdfsh")); // Output: false
console.log(validatePassword("fhkjhjkds44")); // Output: false
console.log(validatePassword("bsgh$%hdfjgSFKF45")); // Output: true
console.log(validatePassword("ADS585gdd*&fhg")); // Output: true
console.log(validatePassword("A85fhg")); // Output: false
console.log(validatePassword("AAd85#fhg")); // Output: true

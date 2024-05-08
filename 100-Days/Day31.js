//! Day 31 : Simple Password Validation

//? Q: Write a function, simplePasswordValidator() that takes a single parameter:
// password: A string representing the password to be validated.
// The function should validate the password based on the following criteria:

// The password must contain at least one lowercase letter, one uppercase letter, and one digit.
// The length must be at least of 8 characters.
// The function should return "true" if the password meets all the criteria, "false" otherwise.

//* Input:
// password: A non-empty string representing the password to be validated.

//* Output:
// true => if the password meets all the criteria.
// false => if the password doesn't meet all the criteria.

//* Constraints:
// The input string password will contain only alphanumeric characters and punctuation marks.

//? Sol:
const simplePasswordValidator = (password) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpperCase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLowerCase = true;
    } else if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  }

  return (hasLowerCase && hasUpperCase && hasNumber && password.length >= 8) ? true : false;
};

console.log(simplePasswordValidator("sfhkjshdfsh")); // Output: false
console.log(simplePasswordValidator("fhkjhjkds44")); // Output: false
console.log(simplePasswordValidator("bsghhdfjgSFKF45")); // Output: true
console.log(simplePasswordValidator("ADS585gddfhg")); // Output: true
console.log(simplePasswordValidator("A85fhg")); // Output: false
console.log(simplePasswordValidator("AAd85fhg")); // Output: true

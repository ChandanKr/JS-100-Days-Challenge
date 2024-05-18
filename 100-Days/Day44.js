//! Day 44 : Email Validation with Regular Expressions (REGEX)

//=====================
//! THEORY PART
//=====================

//todo: Introduction:
// Regular Expression are the sequence of characters that define a search pattern.
// These patterns are widely used for string searching and manipulations.
// In validations, REGEX helps to ensure that strings such as email addressed and passwords conform to expected formats.

//todo: Basic Syntax:

//? literals:
// ordinary characters like 'a', '1', or '%'.

//? metacharacters:
// characters with special meanings, like `.` (any character), `^` (carat - start of string), `$` (end of string), etc.

//? character classes:
// sets of characters, like `[a-z]` (for any lowercase letter), etc.

//? character classes and shorthand:
// In addition to specific character sets, regex includes several shorthand character character classes that help to match common character type:

//* digit characters:
// `\d` => matches any digits (0-9).
// `\D` => matches any non-digit.

//* whitespace characters:
// `\s` => matches any whitespace character (including spaces, tabs, and line breaks).
// `\S` => matches any non-whitespace characters.

//? quantifiers:
// specify how many times a character can occur, like `+` (one or more) or `*` (zero or more times) or `{1,3} (between one and three times).

//? escape charters:
// use a backslash (`\`) to escape special characters and treat them like ordinary character.

// `\.` => matches a literal dot.
// `\$` => matches a dollar sign.
// `\^` => matches a caret sign.

//======================
//! QUESTION PART
//======================

//? Q: You are tasked with implementing a function to validate email address using a regular expression. Write a function, validateEmail() that takes a string email as input and returns "true" if the email address is valid according to the following rules:

//* The local part of the email address (before "@") can contain:
// Alphanumeric characters (A-Z, a-z, 0-9)
// Special characters: period("."), underscore("_"), percent("%"), plus("+"), or hyphen("-")
// Consecutive periods are not allowed
// Special characters can't appear at the beginning or end of the local part

//* The domain part of the email address (after "@") can contain:
// Alphanumeric characters (A-Z, a-z, 0-9)
// Special characters: period(".") or hyphen("-")
// Must contain at least one period(".")
// The top-level domain (TLD) must consist of at least two alphabetic characters (e.g., "com", "org", "net", etc.)

//* Hint: [A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}

//? Sol:

const validateEmail = (stringEmail) => {
  return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(
    stringEmail
  );
};

console.log(validateEmail("john.doe@example.com")); // Output: true
console.log(validateEmail("invalid..dot@domain.com")); // Output: false
console.log(validateEmail("missing@dotcom")); // Output: false
console.log(validateEmail("no@domain")); // Output: false



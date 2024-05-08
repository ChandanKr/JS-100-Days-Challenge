//! Day 29 : Number Range Generator

//? Q: WAF generateNumRange() that generates an array containing consecutive numbers from a to b(inclusive).

//* Input:
// a: An integer representing the starting number of the range.
// b: An integer representing the ending number of the range.
// arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
// An array containing consecutive numbers from a to b(inclusive).


//* Constraints:
// a and b will be integers.
// a <= b

//? Sol:
const truncateString = (str, maxLength) => {
    return maxLength <= 0 ? str : str.slice(0, maxLength).concat("...");
  };
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // Output: A-tisket...
  console.log(truncateString("A-tisket a-tasket", 0)); // Output: A-tisket a-tasket
  
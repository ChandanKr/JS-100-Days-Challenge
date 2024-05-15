//! Day 39 : Age Calculator From Birth-Date

//? Q: Write a function, calculateAge() that takes a birth date string parameters in YYYY-MM-DD format as input and calculates the current age of the person in years.

//* Constraints:
// The function must handle leap years and varying numbers of days in each month accurately.
// Consider the timezone differences and ensure the age is calculated based on current date in your local time zone.
// The output should be the age in whole years.

//? Sol:

const calculateAge = (birthDate) => {
  let currentDate = new Date();
  birthDate = new Date(birthDate);

  let currentAge = currentDate.getFullYear() - birthDate.getFullYear();

  let monthDiff = currentDate.getMonth() - birthDate.getMonth();

  //   return monthDiff;
  return monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ? currentAge - 1
    : currentAge;
};

console.log(calculateAge("1997-05-26")); // Output: 27 => it will vary depending on the current date.

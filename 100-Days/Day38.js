//! Day 38 : Calculate Number of Days Between Two Dates

//? Q: Write a function, calculateDaysBetweenDates() that takes two date string parameters in YYYY-MM-DD format as input and calculates the number of days between these two dates.

//? Sol:

const calculateDaysBetweenDates = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);

  return Math.abs(date2 - date1) / (24 * 60 * 60 * 1000);
};

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31")); // Output: 30

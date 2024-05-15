//! Day 40 : Generate Simple Bar Chart With Array Data

//? Q: Write a function, generateBarChart() that takes an array of numbers as input and generates a simple text-based bar chart.

//* Constraints:
// The function must handle leap years and varying numbers of days in each month accurately.
// Consider the timezone differences and ensure the age is calculated based on current date in your local time zone.
// The output should be the age in whole years.

//? Sol:
//* Method 1:
// const generateBarChart = (arr) => {
//   const newArr = arr.map((currElem, index) => {
//     let star = "";
//     let number = 0;
//     while (number < currElem) {
//       star = star + "*";
//       number++;
//     }
//     return `${index + 1}: ${star}`;
//   });

//   return newArr.join("\n") + "\n";
// };

//* Method 2:
const generateBarChart = (arr) => {
  return (
    arr
      .map((currElem, index) => {
        return `${index + 1}: ${"*".repeat(currElem)}`;
      })
      .join("\n") + "\n"
  );
};

console.log(generateBarChart([5, 3, 9, 2]));
// Output:
// 1: *****
// 2: ***
// 3: *********
// 4: **

console.log(generateBarChart([15, 7, 11, 3]));
// Output:
// 1: ***************
// 2: *******
// 3: ***********
// 4: ***

//! Day 37 : Simple Interest Calculator

//? Q: Write a function, calculateSimpleInterest() that takes three parameters as input: principal amount, rate of interest and time in years and calculates the simple interest with given parameters.

//? Sol:

const calculateSimpleInterest = (p, r, t) => (p * t * r) / 100;

console.log(calculateSimpleInterest(1000, 5, 3)); // Output: 150
console.log(calculateSimpleInterest(5000, 10, 4)); // Output: 2000
console.log(calculateSimpleInterest(10000, 7, 5)); // Output: 3500

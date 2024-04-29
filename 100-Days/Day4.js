//! Day 4 : Check Triangle Type : "Equilateral", "Isosceles", or "Scalene"

//? Q: WAF checkTriangleType() that takes three parameters representing the lengths of the three sides of a triangle. The function should return a string indicating the type of the triangle: "Equilateral", "Isosceles", or "Scalene".

//* Constraints:
// If all three sides are of equal lengths, return "Equilateral".
// If only two sides are of equal lengths, return "Isosceles"
// If all three sides are of different lengths, return "Scalene"

//? Sol:

const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";

  return "Scalene";
};

console.log(checkTriangleType(3, 3, 3)); // Output: Equilateral
console.log(checkTriangleType(3, 4, 3)); // Output: Isosceles
console.log(checkTriangleType(3, 3, 4)); // Output: Isosceles
console.log(checkTriangleType(3, 4, 4)); // Output: Isosceles
console.log(checkTriangleType(3, 4, 5)); // Output: Scalene

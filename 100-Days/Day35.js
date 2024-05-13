//! Day 35 : Check Object Emptiness

//? Q: Write a function, isObjectEmpty() that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

//* Constraints:
// The input object may have any number of properties, including zero.
// The function should return "true" if object is empty, "false" otherwise.

//? Sol:
// * Method 1:
// const isObjectEmpty = (obj) => {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// };

//* Method 2:
const isObjectEmpty = (obj) => (Object.keys(obj).length === 0 ? true : false);

console.log(isObjectEmpty({})); // Output: true
console.log(isObjectEmpty({ name: "Chandan" })); // Output: false
console.log(isObjectEmpty({ keyWithNull: null })); // Output: false
console.log(isObjectEmpty({ keyWithUndefined: undefined })); // Output: false

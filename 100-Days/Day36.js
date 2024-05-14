//! Day 36 : Convert Object to Array and Vice-Versa.

//? Q: Write two functions:

//* objectToArray() takes an object as input and returns an array of key-value pairs, where each element in the array is an array with two elements: the key and the corresponding value from the object.

//* arrayToObject() takes an array of key-value pairs (as returned by objectToArray()) and returns a new object with the key and values from the array.

//* Constraints:
// The input object may contain properties of any data type.
// The input array must contain arrays with exactly two elements (key-value pairs).
// The output object should have properties in the same order as the original object.
// Ensure that the conversion function works correctly for objects with various data types as values, such as strings, numbers, and objects.

//? Sol:

const obj = {
  name: "Chandan Kumar",
  age: 27,
  city: "Delhi",
};

// Convert the object to an array of key-value pairs.
let entries = Object.entries(obj);
console.log(entries);

// Convert the array of key-value pairs back to an object.
let newObj = Object.fromEntries(entries);
console.log(newObj);

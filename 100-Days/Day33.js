//! Day 33 : Random Hex Color Generator

//? Q: Write a function, randomHexColor() that generates a random hexadecimal color code each time it is called. The function should return a string, starting with "#", representing the random color code in the format of "#RRGGBB", where RR, GG and BB are two-digit hexadecimal numbers representing the RED, GREEN and BLUE components of the color, respectively.

//* Constraints:
// The output color code should always start with "#" followed by six hexadecimal characters (RRGGBB).
// The function should not take any parameters.
// The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal color codes.

//? Sol:
const randomHexColor = () => {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0).toUpperCase()}`;
};

console.log(randomHexColor()); // Output: Random 7 digit char starting with # (e.g., #28FC39).




//===================================
//! Special Notes: 
//===================================
//? Math.random().toString(16).slice(2, 8).padEnd(6, 0).toUpperCase()

//* "Math.random()" => to generate a random number b/w 0 to 1 (e.g., 0.985583548619064).

//* ".toString(16)" => to convert into a hexadecimal string (e.g., 0.28fc391a3fb4c).

//* ".slice(2, 8)" => to slice the generated hexadecimal string from index 2 to index 7 (e.g., 28fc39)

//* ".padEnd(6, 0)" => if generated characters are less than 6, it will add 0 at the end until it become a string of 6 characters.

//* ".toUpperCase()" => to convert generated string into uppercase.
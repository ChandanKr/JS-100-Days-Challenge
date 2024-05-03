//! Day 17 : String to camelCase and snake_case

//? Q: WAF camelSnakeCase() which calls two more functions, toCamelCase() and to_snake_case() inside it and returns camelCase and snake_case of the string provided.

//* Constraints:
// toCamelCase() that takes string as input and returns the camelCase representation of that string.
// to_snake_case() that takes string as input and returns the snake_case representation of that string.
// camelSnakeCase() returns camelCase and snake_case of the string provided.

//? Sol:

const toCamelCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((currElem, index) => {
      if (index === 0) {
        return currElem.toLowerCase();
      } else {
        return (
          currElem.charAt(0).toUpperCase() + currElem.slice(1).toLowerCase()
        );
      }
    })
    .join("");
};

const to_snake_case = (str) => {
  return str.trim().toLowerCase().replaceAll(" ", "_");
};

const camelSnakeCase = (str) => {
  return `camelCase: ${toCamelCase(str)}, snake_case: ${to_snake_case(str)}`;
};

console.log(camelSnakeCase("hello wOrld")); // Output: camelCase: helloWorld, snake_case: hello_world
console.log(camelSnakeCase("hello wOrld hOw Are you")); // Output: camelCase: helloWorldHowAreYou, snake_case: hello_world_how_are_you

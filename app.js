// this is a standard word for all over browser or js engine to access  global obj
// whether it is frontend or backend
// console.log(globalThis);

// this is an empty object in node
// console.log(this);
// console.log(global);

// how to do import and export
require("./xyz.js");
const data = require("./data.json");

const { multiply, calculateSum } = require("./calculate");

console.log(calculateSum(4, 5));
console.log(multiply(4, 5));
console.log(data);

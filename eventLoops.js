const fs = require("fs");
const a = 100;

setImmediate(() => console.log("call immediately"));
fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading callback");
});

Promise.resolve("Promise").then(console.log);

setTimeout(() => {
  console.log("Timer");
}, 0);

function print(a) {
  console.log("a=", a);
}

process.nextTick(() => console.log("process.nextTick"));
print(a);
console.log("Last line of code.");

// output should be
// a=100
// Last line of code
// Timer
// call immediately
// file reading callback

// if we add promise and process then output will be

// a=100
// Last line of code
// process.nextTick
// promise
// Timer
// call immediately
// file reading callback

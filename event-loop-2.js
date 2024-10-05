const fs = require("fs"); // output
// Last line of code.
// process.nextTick
// inner nextTick
// Promise
//Timer expired
// immediate
//File reading callback

setImmediate(() => console.log("immediate"));

setTimeout(() => {
  Promise.resolve("Timer Promise").then(console.log);
  console.log("Timer expired");
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading callback");
});
process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  Promise.resolve("Inner Promise").then(console.log);
  console.log("process.nextTick");
});

console.log("Last line of code.");

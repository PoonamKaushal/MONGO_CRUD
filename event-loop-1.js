const fs = require("fs"); // output
// Last line of code
// ist nexttick
//  Promise
// Timer expired
// immediate
// File read callback
// 2nd process tick
//  2nd immediate
// 2nd Timer

setImmediate(() => console.log("immediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);
  process.nextTick(() => console.log("2nd process tick"));
  setImmediate(() => console.log("2nd immediate"));
  console.log("File read callback");
});

process.nextTick(() => console.log("1st nexttick"));

console.log("Last line of file.");

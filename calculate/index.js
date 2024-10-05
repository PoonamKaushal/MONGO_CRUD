const { multiply } = require("./multiply");
const { calculateSum } = require("./sum");

module.exports = { multiply, calculateSum };

// this is how we can make a folder a module so that we no need to import each single file from /calculate/multiply
// we can directly import from calculate folder.

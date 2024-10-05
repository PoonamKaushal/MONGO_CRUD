function calculateSum(a, b) {
  var sum = 0;
  return (sum = a + b);
}
var x = "Hello word";
module.exports = calculateSum;

// if i have to export multithings here i need to create an obj as shown below

module.exports = {
  x,
  calculateSum,
};

// above statement is same as
// module.exports.x=x
// module.exports.calculateSum=calculateSum

// Q: The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

// I. Booleans
// For booleans:

// true should be converted to "true"
// false should be converted to "false"
// II. Numbers
// For numbers, conversion should be as follows:

// // e.g.
// (3).toString() === "3"
// (3.14).toString() === "3.14"
// (-78).toString() === "-78"
// Math.PI.toString() === "3.141592653589793"
// III. Arrays
// For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. However, on top of fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:

// // e.g.
// [].toString() === "[]"
// [1].toString() === "[1]"
// [2,4,8,17].toString() === "[2, 4, 8, 17]"
// [Math.PI, Math.E].toString() === "[3.141592653589793,2.718281

// Customize toString for booleans
function customBooleanToString(value) {
  return value ? "true" : "false";
}

// Customize toString for numbers
function customNumberToString(value) {
  return `${value}`;
}

function customArrayToString(array) {
  return "[" + array.map(customNumberToString).join(", ") + "]";
}

// Q:The toString() method has been disabled for booleans, numbers, arrays and objects.
// Your goal is to retrive toString() for the following data types.
//  Booleans : true should be converted to "true"
//  Numbers : (3.14).toString() === "3.14"
//  Arrays : [2,4,8,17].toString() === "[2, 4, 8, 17]"

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

//const myBoolean = true;
const myNumber = 3.14;
const myArray = [2, 4, 8, 17];
console.log(customBooleanToString(myBoolean));
console.log(customNumberToString(myNumber));
console.log(customArrayToString(myArray));

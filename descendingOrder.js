// Q: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  const numberString = n.toString();
  const digitArray = numberString.split("");
  digitArray.sort(function (a, b) {
    return b - a;
  });
  const sortedString = digitArray.join("");
  const result = parseInt(sortedString);
  return result;
}

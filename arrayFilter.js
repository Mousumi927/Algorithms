// Q: JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

function getEvenNumbers(numbersArray) {
  const evens = [];
  numbersArray.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    }
  });
  console.log(evens);
  return evens;
}

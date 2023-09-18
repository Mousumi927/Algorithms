// Q: Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array or list(depending on language).

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
countBy(3, 4);

//alt way

function countBy(x, n) {
  const z = [];
  let count = 1;

  while (z.length < n) {
    z.push(x * count);
    count++;
  }

  return z;
}

console.log(countBy(3, 4));

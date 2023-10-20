// Q:write a function where if the number is divisable by 3, it will show "fizz";
// if divisable by 5, it will show "buzz"
// if divisable by both, it will show "fizzBuzz"

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);

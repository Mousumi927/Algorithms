// Q:Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

function reverseWords(input) {
  let result = "";
  let currentWord = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      currentWord = input[i] + currentWord;
    } else {
      result += currentWord + " ";
      currentWord = "";
    }
  }

  result += currentWord;

  return result;
}
const inputString = "Hello World";
const reversedString = reverseWords(inputString);
console.log(reversedString);

//alt way
function reverseWords(input) {
  return input
    .split(' ')  
    .map(word => word.split('').reverse().join(''))  
    .join(' ');  
}

//const inputString = "Hello World";
//const reversedString = reverseWords(inputString);
console.log(reversedString);

// Q:Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

 let result = ''; 
  let currentWord = ''; 
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
      
      currentWord = input[i] + currentWord;
    } else {
      
      result += currentWord + ' ';
      currentWord = ''; 
    }
  }

  result += currentWord;

  return result;
}


const inputString = "Hello World";
const reversedString = reverseWords(inputString);
console.log(reversedString); 
// Q: Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let countOfVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    if (vowels.includes(char)) {
      countOfVowels++;
    }
  }
  return countOfVowels;
}

//alt way
function getCount(str) {
  let countOfVowels = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      countOfVowels++;
    }
  }

  return countOfVowels;
}

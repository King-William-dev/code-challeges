// # Code Challenges (Set 1)

// 1. Write a function named fizzBuzz that takes in two(2) parameters which
// are expected to be strings. The function should return the string Fizz if
// the combined length of the parameters is divisible by 3, the string Buzz
// if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and
// 3.

function fizzBuzz(str1, str2) {
  let str = str1.concat(str2);

  if (str.length % 3 == 0 || str.length % 5 == 0) {
    return 'FizzBuzz';
  } else if (str.length % 5 == 0) {
    {
      return 'Buzz';
    }
  } else if (str.length % 3 == 0) {
    return 'Fizz';
  }
}
console.log(fizzBuzz('Hellooo', 'Worldone'));

// 2. Write a JavaScript program that prompts a user to enter their year of
// birth and in turn prints a string in the console stating whether the user
// is a minor, a youth, or an elder. Anyone below 18 years is a minor,
// anyone between 18 and 36 years is a youth and the rest are elders.

const yearOfBirth = Number(prompt('Please enter your year of birth', ''));
const currentDay = new Date();
const currentYear = currentDay.getFullYear();
const age = currentYear - yearOfBirth;
if (age < 18) {
  console.log('You are still a minor, go back home!');
} else if (age >= 18 && age <= 36) {
  console.log('You are a youth now, you have come of age!!');
} else {
  console.log('Elder, this program is more tasking, we need your advise!');
}

/* Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
 

Follow up: Could you do it without any loop/recursion in O(1) runtime? */

function addDigits(num) {
  if (num < 10) {
    return num;
  } else {
    num = Math.floor(num / 10) + (num % 10);
  }
  if (num < 10) {
    return num;
  } else {
    return addDigits(num);
  }
}
console.log(addDigits(564854));

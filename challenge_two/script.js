/* Write a function named twoSum which takes two parameters: nums
and target. Given an array of integer nums and an integer target, return
indices of the two numbers such that they add up to the target. You
may assume that each input would have exactly one solution, and you
may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:
Input: nums = [3,2,4], target = 6;
Output: [1,2] */

function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));

/* 
function twoSum(arr, target) {
  let numObj = {};
  for (let i = 0; i < arr.length; i++) {
    let thisNum = arr[i];
    numObj[thisNum] = i;
  }
  for (let j = 0; j < arr.length; j++) {
    let diff = target - arr[j];
    if (numObj.hasOwnProperty(diff) && numObj[diff] !== j) {
      return [j, numObj[diff]];
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9)); */

/* Write a function named firstPalindrome which takes a parameter:
words. Given an array of string words, return the first palindromic string
in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned. */
function firstPalindrome(words) {
  for (let element of words) {
    // turn an element into array
    let reversedElement = element.split('').reverse().join('');
    if (reversedElement == element) {
      return element;
    }
  }
  return '';
}
console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']));

/* Given an integer num, write a function that repeatedly adds all its digits until the result has only one digit, and return it. 
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

0 <= num <= 2^31 - 1
 

Follow up: Could you do it without any loop/recursion in O(1) runtime? */
//Recursive answer
//if num is less than 10, return num
// Else remove the last digit from num, add it to the new num;
// Now, if num is less than 10, retun num
// Else run the algorith again.
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
console.log(addDigits(38));

// Mathematical answer
// If num is less than 10, return num
// If num can be divided by 9, return 9
//Else, return the reminder of the num divided by 9
function addDigits(num) {
  if (num < 10) {
    return num;
  }
  if (num % 9 == 0) {
    return 9;
  } else {
    return num % 9;
  }
}
console.log(addDigits(38));

/* Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. */
// Pseudo code
/* Identigy the length of the Array
calculate the middle index by dividing the legth by 2
sort the array in ascending or descending order
return the middle index value of the sorted array */

// function majorityElement(nums) {
//   let length = nums.length;
//   let middle = parseInt(nums.length / 2);
//   nums = nums.sort();
//   return nums[middle];
// }
// console.log(majorityElement([3, 2, 3]));

const majorityElement = (nums) => {
  let count = 0; //Initializes a counter to track the frequency of the current candidate element.
  let candidate = null; //Initializes a variable to store the current candidate element.
  for (let i = 0; i < nums.length; i++) {
    //This loop iterates through each element in the input array nums
    if (count === 0) {
      //If the counter is zero, it means we need a new candidate. The current element nums[i] becomes the new candidate.
      candidate = nums[i];
    }
    if (nums[i] === candidate) {
      //If the current element matches the candidate, increment the count.
      count++;
    } else {
      //If the current element doesn't match the candidate, decrement the count.
      count--;
    }
  }
  return candidate; //After the loop completes, the candidate variable holds the majority element.
};
console.log(majorityElement([3, 2, 3]));

/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

//create an empty dictionary called map
/* start a for loop that iterates through all the values in the integer array nums and checks if that interger is in the dictionary Map
if the integer is not in the Map, add it to the Map
if the interger is already in the Map, return true
if after all the interger from array nums are added, return false */
function containsDuplicate(nums) {
  let seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));

/*
Given an Array containing integers, floats, and one character strings, write a function that takes an Array as a parameter and returns an Object with keys evens, odds, and chars. The value for evens is an array of sorted even numbers, the value for odds is a list of sorted odd numbers and chars is a list of sorted single-character strings.
Do not use the sort array method.
*/
function arrangeArray(arr) {
  const evens = [];
  const odds = [];
  const chars = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
      odds.push(arr[i]);
    } else if (typeof arr[i] === 'string' && arr[i].length === 1) {
      chars.push(arr[i]);
    }
  }
  //   // Sort evens
  for (let i = 0; i < evens.length; i++) {
    for (let j = i + 1; j < evens.length; j++) {
      if (evens[i] > evens[j]) {
        let temp = evens[i];
        evens[i] = evens[j];
        evens[j] = temp;
      }
    }
  }
  //   // Sort odds
  for (let i = 0; i < odds.length; i++) {
    for (let j = i + 1; j < odds.length; j++) {
      if (odds[i] > odds[j]) {
        let temp = odds[i];
        odds[i] = odds[j];
        odds[j] = temp;
      }
    }
  }
  //   // Sort chars
  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        let temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
      }
    }
  }
  return {
    evens: evens,
    odds: odds,
    chars: chars,
  };
}
console.log(arrangeArray([3.0, 'n', 7, 'x', 20, 'd', 4, 'f', 8]));

/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. 
Example:
Inputs: nums = [2,2,1]
Output: 1 
*/

function singleNumber(nums) {
  let result = 0; //We start with a variable result initialized to 0. This variable will store the final single number.
  for (let i = 0; i < nums.length; i++) {
    //The code iterates through each element in the nums array.
    result ^= nums[i]; //result ^= nums[i];: The core of the solution lies in the XOR (exclusive or) operation (^)
    //     When a number appears twice in the array, it's XORed with itself, resulting in 0. This effectively cancels out the duplicates.
    // The single number, appearing only once, will be XORed with 0s from the canceled duplicates, leaving the single number unchanged in result.
  }
  return result; //After the loop, the result variable holds the single number that appears only once in the array, so it is returned.
}
console.log(singleNumber([2, 2, 1]));

/* Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ""
Example:

Input: str = ["flower", "flow", "flight"]
Output: "fl"
 */

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }
  strs.sort(); //The strings are sorted alphabetically using sort(). This places strings with common prefixes closer together.
  let first = strs[0];
  let last = strs[strs.length - 1]; //The first and last strings are compared character by character to identify the common prefix.
  let i = 0;
  while (i < first.length && i < last.length && first[i] === last[i]) {
    i++;
  }
  return first.substring(0, i); //he substring containing the common prefix is returned.
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

function longestCommonPrefix2(str) {
  if (str.length === 0) {
    return '';
  }
  let prefix = str[0];
  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}
console.log(longestCommonPrefix2(['flower', 'flow', 'flight']));

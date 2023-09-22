const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

}


const countLetters = function (inputString) { //Count the values in the string
  let sum = 0;
  // let sum1 = [];
  // let sum2 = {};



  // For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

  for (const char of inputString) {
    sum += 1;
  }

  return (sum);
};



const letterCounts = countLetters("LHL");
console.log(letterCounts);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

}


const countLetters = function (inputString) {
  let sum = 0;

  for (const char in inputString) {
    sum += 1;
  }

  return (sum);
};


const letterCounts = countLetters("LHL");
console.log(letterCounts);


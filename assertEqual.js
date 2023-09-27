const eqArrays = require("./eqArrays");

function assertEqual(actual, expected) {
  const result = actual === expected;
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  return result; // Return a boolean result
}

module.exports = eqArrays;

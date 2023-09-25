function eqArrays(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } 
  
  for (let i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      return false;
    }
  }
  return true;
}


function assertArraysEqual(actual, expected){
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }else {
    console.error(`❌❌❌ Assertion Failed: ", [${actual}] !== [${expected}]`);
  }
}


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const double = (num) => num * 2;

// Test Case 1
const inputArray1 = [1, 2, 3, 4, 5];
const expectedOutput1 = [2, 4, 6, 8, 10];
const result1 = map(inputArray1, double);
assertArraysEqual(result1, expectedOutput1); // Should pass

// Test Case 2
const inputArray2 = [0, -1, 100];
const expectedOutput2 = [0, -2, 200];
const result2 = map(inputArray2, double);
assertArraysEqual(result2, expectedOutput2); // Should pass


const toUpperCase = (str) => str.toUpperCase();

// Test Case 3
const inputArray3 = ['hello', 'world', 'javascript'];
const expectedOutput3 = ['HELLO', 'WORLD', 'JAVASCRIPT'];
const result3 = map(inputArray3, toUpperCase);
assertArraysEqual(result3, expectedOutput3); // Should pass

// Test Case 4
const inputArray4 = ['apple', 'banana', 'cherry'];
const expectedOutput4 = ['APPLE', 'BANANA', 'CHERRY'];
const result4 = map(inputArray4, toUpperCase);
assertArraysEqual(result4, expectedOutput4); // Should pass

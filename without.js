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

// Implement without which will return a subset of a given array, 
// removing unwanted elements.

function without (actual, expected){
  let result = []; // Create an empty array to store the result.

  for (let i = 0; i < actual.length; i++){
    let found = false;// Initialize a variable to check if the element is found in 'expected'.

    for (let j = 0; j < expected.length; j++) {
      if (actual[i] === expected[j]){
        found = true; // Set 'found' to true if the element is found in 'expected'.
        break;
      }
    }

    if (!found){
      result.push(actual[i]); // Push it into our new array!
    }
  }

  return result;
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
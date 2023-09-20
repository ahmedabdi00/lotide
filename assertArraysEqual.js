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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // should fail
function eqArrays(array, expected) {
  if (array.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}


function assertArraysEqual(array, expected) {
  if (eqArrays(array, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${array}] === [${expected}]`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ", [${array}] !== [${expected}]`);
  }
}

// Implement middle which will take in an array and return
// the middle-most element(s) of the given array.

function middle(array) {
  let middleIndex = Math.floor(array.length / 2)//

  if (array.length <= 2) {
    console.log([]);
  } else if (array.length % 2 !== 0) {
    console.log([array[middleIndex]]);
  } else if (array.length % 2 === 0) {
    console.log([array[middleIndex - 1], array[middleIndex]]);
  }
}


(middle([1])) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]s
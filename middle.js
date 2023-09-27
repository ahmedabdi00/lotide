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


// Implement middle which will take in an array and return
// the middle-most element(s) of the given array.

function middle(array) {
  let middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[middleIndex]];
  } else if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
}

module.exports = middle;
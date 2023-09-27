const eqArrays = require('./eqArrays');

function assertArrayEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.error(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
}

module.exports = assertArrayEqual;


const assertEqual = require('./assertEqual');


function eqArrays(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } 
  
  for (let i = 0; i < actual.length; i++) { // Compare i to actual.length
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqArrays;

function eqArrays(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}


function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.error(`❌❌❌ Assertion Failed: ", [${actual}] !== [${expected}]`);
  }
}

const letterPositions = function (sentence) { //declaration of a constant variable named


  if (typeof sentence !== 'string') {   // Check if sentence is a string before proceeding
    console.log("Input is not a string.");
    return {};
  }
  const results = {}; //"cleanedSentence" will hold the modified version of the input 


  // /: This is the start of a regular expression literal,
  // \s represents any whitespace
  // /: This is the end of the regular expression literal.
  // g tells the replace method to replace all occurrences of the pattern in the string
  // '' replaces all whitespace characters found in the sentence with nothing


  const cleanedSentence = sentence.replace(/\s/g, '').toLowerCase();


  for (let i = 0; i < cleanedSentence.length; i++) { //sentence: The input string that you want to process.
    const letter = cleanedSentence[i];

    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }

  
// Compare the positions of specific letters
assertArraysEqual(results['l'], [0]);
assertArraysEqual(results['i'], [1, 11]);
assertArraysEqual(results['g'], [2]);
assertArraysEqual(results['h'], [3, 5, 15, 18]);

  console.log(results);
  return results;
};


letterPositions("lighthouse in the house")

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else if (actual !== expected){
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}

const tail = function (array){
  const tail = array.tail;  

};


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!



// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("123", "123")   //Comparing identical strings
// assertEqual("111", "222")   //Comparing non-identical strings
// assertEqual(1000, 1000)     //Comparing identical numbers
// assertEqual(2222, 3333)     //Comparing non-identical numbers

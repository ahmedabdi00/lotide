const assertEqual = require('./assertEqual');

const head = function (array) {
  const first = array[0];
  return first;
}

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("123", "123")   //Comparing identical strings
// assertEqual("111", "222")   //Comparing non-identical strings
// assertEqual(1000, 1000)     //Comparing identical numbers
// assertEqual(2222, 3333)     //Comparing non-identical numbers

module.exports = head;

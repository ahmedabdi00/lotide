const assertEqual = require('./assertEqual');

const tail = function (array) {
  if (array.length <= 1) {
    return []; // Return an empty array for arrays with 1 or 0 elements.
  }

  const tailArray = array.slice(1); // Create a new array containing all elements except the first one.
  return tailArray;
};

module.exports = tail;

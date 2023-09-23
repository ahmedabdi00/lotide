const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      // If both values are arrays, compare them using eqArrays
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      // If values are not arrays, compare them directly
      return false;
    }
  }

  return true;
};

const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

// Test cases
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
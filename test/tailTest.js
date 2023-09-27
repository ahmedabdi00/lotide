const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for input ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // Call tail without capturing the result
    assert.strictEqual(words.length, 3); // Original array should still have 3 elements
  });
});

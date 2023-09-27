const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

describe("#assertArrayEqual", () => {
  it("does not throw an error when given ([1, 2], [1, 2])", () => {
    assert.doesNotThrow(() => assertArrayEqual([1, 2], [1, 2]));
  });

  it("throws an error when given ([1, 2], [1, 3])", () => {
    assert.throws(() => assertArrayEqual([1, 2], [1, 3]));
  });
});

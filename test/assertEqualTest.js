const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("should fail when comparing 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("should pass when comparing 1 and 1", () => {
    assert.isTrue(assertEqual(1, 1));
  });

  it("should pass when comparing '123' and '123'", () => {
    assert.isTrue(assertEqual("123", "123"));
  });

  it("should fail when comparing '111' and '222'", () => {
    assert.isFalse(assertEqual("111", "222"));
  });

  it("should pass when comparing 1000 and 1000", () => {
    assert.isTrue(assertEqual(1000, 1000));
  });

  it("should fail when comparing 2222 and 3333", () => {
    assert.isFalse(assertEqual(2222, 3333));
  });
});

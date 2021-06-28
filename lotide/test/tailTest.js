const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns true for words.length [YoYo, Lighthouse, Labs] = 3 after tail(words)", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words)
    assert.strictEqual(words.length, 3);
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
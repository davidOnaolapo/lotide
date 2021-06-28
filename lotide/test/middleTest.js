const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [7, 19, 21, 5, 1, 2, 3, 78, 1000, 3, 4]", () => {
    assert.strictEqual(middle([7, 19, 21, 5, 1, 2, 3, 78, 1000, 3, 4]), [2]);
  });
});

// assertArrayEqual(middle([7, 19, 21, 5, 1, 2, 3, 78, 1000, 3, 4]), [2]);

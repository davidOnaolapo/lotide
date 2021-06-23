const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, val) => {
  const allKeys = Object.keys(obj);

  for (let key of allKeys) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}

assertEqual(findKey(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);
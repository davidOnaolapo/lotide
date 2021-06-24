const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  objKeys = Object.keys(obj);

  for (let key of objKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 17 },
  "Akelarre":  { stars: 17 }
}, x => x.stars === 0))

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 17 },
  "Akelarre":  { stars: 17 }
}, x => x.stars === 0), undefined)
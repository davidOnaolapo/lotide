const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }  
  }
  return true;
} 

const assertArraysEqual = (arr1, arr2) => {
    assertEqual(eqArrays(arr1, arr2), true);
}

const without = (source, itemsToRemove) => {
  let newArr = [];
  let isAbsent = true;

  for (let val of source) {
    for (comp of itemsToRemove) {
      if (val === comp) {
        isAbsent = false;
      }
    }
    if(isAbsent) {
      newArr.push(val)
    }
    isAbsent = true;
  }
  console.log(newArr);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

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

const takeUntil = function(arr, callback) {
  const newArr = [];

  for (let val of arr) {
    if(callback(val)) {
      break;
    }
    newArr.push(val);
  }
  return newArr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])
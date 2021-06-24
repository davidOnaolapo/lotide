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


const eqObjects = function(object1, object2) {
  allKeys1 = Object.keys(object1);
  allKeys2 = Object.keys(object2);

  if (allKeys1.length !== allKeys2.length) {
    console.log("I failed here1");
    return false;
  }

  for (let i = 0; i < allKeys1.length; i++) {
    if (Array.isArray(object1[allKeys1[i]])) {
      if(!eqArrays(object1[allKeys1[i]], object2[allKeys1[i]])) {
        return false;
      } else {
        continue
      }
    } else {
      if (object1[allKeys1[i]] !== object2[allKeys1[i]]) { 
        console.log("I failed here3");
        return false;
      }
    } 
  }
  return true;
};

const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  assertEqual(eqObjects(obj1, obj2), true);
}

const cd = { c: "1", d: ["2", 3, 29], J:2};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 29], j:2};

assertObjectsEqual(cd, cd2);
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

const assertArrayEqual = (arr1, arr2) => {
  assertEqual(eqArrays(arr1, arr2), true);
}


const map =(arr, func)=> {
  const newArr = [];
  for (let word of arr) {
    newArr.push(word[0]);
  }

  return newArr;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
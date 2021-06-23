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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] === " ") {
      continue;
    }

    if(results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i]; 
    }
  }
  return(results);
};

assertArrayEqual(letterPositions("hello").h, [0]);
assertArrayEqual(letterPositions("hello").e, [1]);
assertArrayEqual(letterPositions("hello").l, [2,3]);
assertArrayEqual(letterPositions("hello").o, [4]);
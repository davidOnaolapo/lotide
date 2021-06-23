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

const middle = (arr) => {
  let newArr = [];
  let l = arr.length

  if (l <= 2) {
    return [];
  }

  if (l % 2 !== 0 ) {  
    newArr.push(arr[Math.floor(l/2)]);
    console.log(newArr);
    return newArr;
  }

  newArr.push(arr[(l/2) - 1]);
  newArr.push(arr[l/2]);

  return newArr;
}

assertArrayEqual(middle([7, 19, 21, 5, 1, 2, 3, 78, 1000, 3, 4]), [2, 3]);

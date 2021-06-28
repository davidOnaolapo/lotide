
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual'); 

const assertArrayEqual = (arr1, arr2) => {
  assertEqual(eqArrays(arr1, arr2), true);
};

module.exports = assertArrayEqual;




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let ans = {};
  newStr = str.replace(/ /g, "")
  for(let letter of newStr) {
    if(ans[letter]) {
      ans[letter]++;
    } else {
      ans[letter] = 1;
    }
  }
  console.log(ans);
}

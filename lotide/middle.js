const middle = (arr) => {
  let newArr = [];
  let l = arr.length

  if (l <= 2) {
    return [];
  }

  if (l % 2 !== 0 ) {  
    newArr.push(arr[Math.floor(l/2)]);
    return newArr;
  }

  newArr.push(arr[(l/2) - 1]);
  newArr.push(arr[l/2]);

  return newArr;
}
module.exports = middle;

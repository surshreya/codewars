// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// BEST PRACTICE
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function (num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
};

// MINE
function moveZeros(arr) {
  const zeroes = [];

  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (ele === 0) {
      zeroes.push(ele);
      arr.splice(i, 1);
      i--;
    }
  }
  arr.push(...zeroes);
  return arr;
}

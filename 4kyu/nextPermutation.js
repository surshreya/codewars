// DESCRIPTION:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n) {
  const num = n.toString().split("");
  const len = num.length;
  let k, l;
  for (k = len - 2; k >= 0; k--) {
    if (num[k] < num[k + 1]) {
      break;
    }
  }

  if (k < 0) {
    return -1;
  } else {
    for (l = len - 1; l > k; l--) {
      if (num[l] > num[k]) {
        break;
      }
    }
    let temp = num[k];
    num[k] = num[l];
    num[l] = temp;

    let num1 = num.slice(k + 1, n);
    num1.reverse();
    num.splice(k + 1, n, ...num1);
  }
  return +num.join("");
}

// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// MINE
function expandedForm(num) {
  const digitArr = [];
  let digit;
  while (num > 0) {
    digit = num % 10;
    digitArr.unshift(digit);
    num = Math.trunc(num / 10);
  }

  const result = digitArr
    .map((num, i, total) => num * Math.pow(10, total.length - i - 1))
    .filter((num) => num > 0)
    .join(" + ");
  return result;
}

// BEST PRACTICE
function expandedForm(num) {
  const result = num
    .toString()
    .split("")
    .reverse()
    .map((digit, idx) => digit * Math.pow(10, idx))
    .filter((digit) => digit > 0)
    .reverse()
    .join(" + ");
  return result;
}

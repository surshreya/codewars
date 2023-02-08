// DESCRIPTION:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  let stack = [];
  let bracesMapping = {
    "(": ")",
  };
  for (let i = 0; i < parens.length; i++) {
    const brace = parens[i];
    if (brace === "(") {
      stack.push(brace);
    } else {
      let top = stack.pop();
      if (bracesMapping[top] !== brace) {
        return false;
      }
    }
  }

  return stack.length ? false : true;
}

console.log(validParentheses("()"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("("));
console.log(validParentheses("(())((()())())"));

// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  return str.split(" ").map((word) => {
    if (word.match(/[a-zA-Z]/g)) {
      let letters = word.split("");
      let firstLetter = letters.shift();
      return letters.join("") + firstLetter + "ay";
    } else {
      return word;
    }
  });
}

pigIt("Pig latin is cool");
pigIt("This is my string");

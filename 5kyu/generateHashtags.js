// const capitalize = (word) => {
//   return word[0].toUpperCase() + word.slice(1);
// };

// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  str = str.trim();
  if (!str) return false;
  const result =
    "#" +
    str
      .replace(/\s+/g, " ")
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
  return result.length > 140 ? false : result;
}

console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag(""));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  )
);
console.log(generateHashtag("a".repeat(139)));
console.log(generateHashtag("a".repeat(140)));

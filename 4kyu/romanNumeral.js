// DESCRIPTION:
// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

const romanReferral = {
  M: 1000,
  CM: 900,
  XC: 90,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
const RomanNumerals = {
  toRoman: function (value) {
    var map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    var roman = "";
    while (value > 0) {
      for (var r in map) {
        if (map[r] <= value) {
          roman += r;
          value -= map[r];
          break;
        }
      }
    }
    return roman;
  },

  fromRoman: function (roman) {
    var map = {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    var value = 0;
    for (var i = 0; i < roman.length; i++) {
      var two = map[roman[i] + roman[i + 1]],
        one = map[roman[i]];
      if (two != null) {
        value += two;
        i++;
      } else if (one != null) value += one;
    }
    return value;
  },
};

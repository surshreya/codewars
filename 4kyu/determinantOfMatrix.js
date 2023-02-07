// DESCRIPTION:
// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

// How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

// A 1x1 matrix |a| has determinant a.

// A 2x2 matrix [ [a, b], [c, d] ] or

// |a  b|
// |c  d|
// has determinant: a*d - b*c.

// The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

// |a b c|
// |d e f|
// |g h i|
// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

// |- - -|
// |- e f|
// |- h i|
// Note the alternation of signs.

// The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

function determinant(m) {
  if (m.length == 0) return 0;
  if (m.length == 1) return m[0][0];
  if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  if (m.length > 2) {
    return m.reduce((acc, cur, idx, arr) => {
      const subArr = arr
        .slice(0, idx)
        .concat(arr.slice(idx + 1))
        .map((ele) => ele.slice(1));
      return acc + (idx % 2 === 0 ? 1 : -1) * cur[0] * determinant(subArr);
    }, 0);
  }
}

const m0 = [[1]];
const m1 = [
  [4, 6],
  [3, 8],
];
const m5 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
];

console.log(determinant(m0));
console.log(determinant(m1));
console.log(determinant(m5));

// DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function hexCode(code) {
  let x = code;
  if (x < 0) {
    x = 0;
  }

  if (x > 255) {
    x = 255;
  }

  let hexCode = Number(x).toString(16);
  if (hexCode.length < 2) {
    hexCode = "0" + hexCode;
  }

  return hexCode;
}

function rgb(r, g, b) {
  // complete this function
  const result = hexCode(r) + hexCode(g) + hexCode(b);
  return result.toUpperCase();
}

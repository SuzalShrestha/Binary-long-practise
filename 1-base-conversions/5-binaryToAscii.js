// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/
//helper function to convert binary to decimal
const convertToBase10 = (str) => {
  let binary = str;
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += Math.pow(2, binary.length - i - 1) * binary[i];
  }
  return decimal;
};

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = (str) => {
  let binary8bitStr = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ",";
    }
  }

  return binary8bitStr.split(",");
};

const binaryToAscii = (str) => {
  let array = binaryStringToArray(str);
  let ascii = [];
  for (let item of array) {
    let decimal = convertToBase10(item);
    ascii.push(String.fromCharCode(decimal));
  }
  return ascii.join("");
};

/******************************************************************************/

console.log(binaryToAscii("011000010110001001100011"));
// 'abc'

console.log(binaryToAscii("010000010100001001000011"));
// 'ABC'

console.log(
  binaryToAscii(
    "010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100"
  )
);
// 'Hello, world'

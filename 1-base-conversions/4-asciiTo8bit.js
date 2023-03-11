const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/
const convertToBase10 = (str) => {
  // Your code here
  //convert hexadecimal to decimal
  if (str[0] === "0" && str[1] === "x") {
    let obj = {
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    };

    let decimal = 0;
    let hex = str.slice(2);
    for (let i = 0; i < hex.length; i++) {
      if (obj[hex[i]]) {
        decimal += Math.pow(16, hex.length - i - 1) * obj[hex[i]];
      } else {
        decimal += Math.pow(16, hex.length - i - 1) * hex[i];
      }
    }
    return decimal;
  }
  //convert binary to decimal
  if (str[0] === "0" && str[1] === "b") {
    let binary = str.slice(2);
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
      decimal += Math.pow(2, binary.length - i - 1) * binary[i];
    }
    return decimal;
  }
};
/******************************************************************************/

const convertToBase2 = element => {
  // Your code here
  if(typeof element === 'string'){
    let decimal =convertToBase10(element);
    return convertToBase2(decimal);
  }
  if (typeof element === 'number') {
    let binary=[];
    while (element > 0) {
      binary.unshift(element % 2);
      element = Math.floor(element / 2);
    }
    return binary.join('');
  }
  

};
const asciiTo8bit = str => {
  // Your code here
  let result=[];
 for(let i=0;i<str.length;i++){
  let char=str.charCodeAt(str.indexOf(str[i]));
  let binaryOfChar=convertToBase2(char);
  binaryOfChar=addZeros(binaryOfChar,8);

  result.push(binaryOfChar);
}
return result.join('');
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
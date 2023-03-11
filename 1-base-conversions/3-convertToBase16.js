// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
const convertToBase10 = (str) => {
  // Your code here
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
const convertToBase16 = element => {
  // Your code here
  if(typeof element === 'string') {
    let decimal=convertToBase10(element);
    return convertToBase16(decimal);
  }
  if(typeof element === 'number') {
    let hex=[];
    let myHex = {
      10:"a",
      11:"b",
      12:"c",
      13:"d",
      14:"e",
      15:"f",
    };
    while (element > 0) {
      if(myHex[element %16]){
        hex.unshift(myHex[element % 16]);
      }else{
        
        hex.unshift(element % 16);
      }
      element = Math.floor(element / 16);
    }
    return `0x${hex.join('')}`;
  
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
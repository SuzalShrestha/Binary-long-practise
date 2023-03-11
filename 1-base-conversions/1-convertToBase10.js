// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  //convert hexadecimal to decimal
  
  if (str[0] === '0' && str[1] === 'x') {
    let obj={
      'a':10,
      'b':11,
      'c':12,
      'd':13,
      'e':14,
      'f':15
    }

    let decimal=0;
    let hex = str.slice(2);
    for (let i = 0; i < hex.length; i++) {
      if (obj[hex[i]]){
       decimal+=Math.pow(16,hex.length-i-1)*obj[hex[i]];
      } else {
        decimal+=Math.pow(16,hex.length-i-1)*hex[i];
      }
    }
    return decimal;
   
  }
  //convert binary to decimal
  if (str[0] === '0' && str[1] === 'b') {
    let binary = str.slice(2);
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
      decimal+=Math.pow(2,binary.length-i-1)*binary[i];
    }
    return decimal;
  }
  
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
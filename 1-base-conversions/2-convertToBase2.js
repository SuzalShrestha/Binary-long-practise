// Convert the integers in the console.logs below to base 2

const convertToBase10 = (str) => {
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

const convertToBase2 = (element) => {
  if (typeof element === "string") {
    let decimal = convertToBase10(element);
    return convertToBase2(decimal);
  }
  if (typeof element === "number") {
    let binary = [];
    while (element > 0) {
      binary.unshift(element % 2);
      element = Math.floor(element / 2);
    }
    return `0b${binary.join("")}`;
  }
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log("––––––");

console.log(convertToBase2("0xf")); // 0b1111
console.log(convertToBase2("0xfa")); // 0b11111010
console.log(convertToBase2("0x1234")); // 0b1001000110100
console.log(convertToBase2("0xc9a1")); // 0b1100100110100001
console.log(convertToBase2("0xbf12")); // 0b1011111100010010

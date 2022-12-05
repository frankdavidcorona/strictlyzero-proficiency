// Solution:
function convertToRoman(num) {
  let roman = "";
  const lookup = {
    M: 1000,
    CM: 900,
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

  for (let i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }

  return roman;
}

console.log(convertToRoman(1)); // outputs "I"
console.log(convertToRoman(4)); // outputs "IV"
console.log(convertToRoman(8)); // outputs "VIII"
console.log(convertToRoman(39)); // outputs "XXXIX"
console.log(convertToRoman(49)); // outputs "XLIX"
console.log(convertToRoman(1999)); // outputs "MCMXCIX"

module.exports = convertToRoman;

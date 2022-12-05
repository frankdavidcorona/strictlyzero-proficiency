const convertToRoman = require("./kata.js");

// Test case 1
test("convertToRoman should convert 1 to I", () => {
  expect(convertToRoman(1)).toBe("I");
});

// Test case 2
test("convertToRoman should convert 5 to V", () => {
  expect(convertToRoman(5)).toBe("V");
});

// Test case 3
test("convertToRoman should convert 10 to X", () => {
  expect(convertToRoman(10)).toBe("X");
});

// Test case 4
test("convertToRoman should convert 50 to L", () => {
  expect(convertToRoman(50)).toBe("L");
});

// Test case 5
test("convertToRoman should convert 100 to C", () => {
  expect(convertToRoman(100)).toBe("C");
});

// Test case 6
test("convertToRoman should convert 500 to D", () => {
  expect(convertToRoman(500)).toBe("D");
});

// Test case 7
test("convertToRoman should convert 1000 to M", () => {
  expect(convertToRoman(1000)).toBe("M");
});

// Test case 8
test("convertToRoman should convert 2 to II", () => {
  expect(convertToRoman(2)).toBe("II");
});

// Test case 9
test("convertToRoman should convert 3 to III", () => {
  expect(convertToRoman(3)).toBe("III");
});

// Test case 10
test("convertToRoman should convert 4 to IV", () => {
  expect(convertToRoman(4)).toBe("IV");
});

// Test case 11
test("convertToRoman should convert 6 to VI", () => {
  expect(convertToRoman(6)).toBe("VI");
});

// Test case 12
test("convertToRoman should convert 9 to IX", () => {
  expect(convertToRoman(9)).toBe("IX");
});

// Test case 13
test("convertToRoman should convert 40 to XL", () => {
  expect(convertToRoman(40)).toBe("XL");
});

// Test case 14
test("convertToRoman should convert 90 to XC", () => {
  expect(convertToRoman(90)).toBe("XC");
});

// Test case 15
test("convertToRoman should convert 400 to CD", () => {
  expect(convertToRoman(400)).toBe("CD");
});

// Test case 16
test("convertToRoman should convert 900 to CM", () => {
  expect(convertToRoman(900)).toBe("CM");
});

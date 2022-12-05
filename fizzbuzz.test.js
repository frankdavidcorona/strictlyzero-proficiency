const FizzBuzz = require("./fizzbuzz");

test("should return 'Fizz' when the input is divisible by 3", () => {
  expect(FizzBuzz(3)).toBe("Fizz");
});

test("should return 'Buzz' when the input is divisible by 5", () => {
  expect(FizzBuzz(5)).toBe("Buzz");
});

test("should return 'FizzBuzz' when the input is divisible by both 3 and 5", () => {
  expect(FizzBuzz(15)).toBe("FizzBuzz");
});

test("should return the input number when it is not divisible by 3 or 5", () => {
  expect(FizzBuzz(7)).toBe(7);
});

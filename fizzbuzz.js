// Define the FizzBuzz function
function FizzBuzz(num) {
  // If the number is divisible by 3 and 5, return "FizzBuzz"
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  // If the number is divisible by 3, return "Fizz"
  else if (num % 3 === 0) {
    return "Fizz";
  }
  // If the number is divisible by 5, return "Buzz"
  else if (num % 5 === 0) {
    return "Buzz";
  }
  // Otherwise, return the number itself
  else {
    return num;
  }
}

module.exports = FizzBuzz;

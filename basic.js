// 1. Write a method in Javascript that takes as an input an array of integers and prints them sorted ASC.
function printSorted(arr) {
  // create a copy of the input array to avoid modifying the original
  const sorted = [...arr];

  // sort the array in ascending order
  sorted.sort((a, b) => a - b);

  // print each element on a separate line
  for (const num of sorted) {
    console.log(num);
  }
}

// Call the function
printSorted([5, 3, 1, 4, 2]); // Will prompt as output: 1, 2, 3, 4, 5

// 2. Write a method in Javascript that takes a String and returns true if the string begins with capital letter.
function isCapitalized(str) {
  return str.charAt(0).toUpperCase() === str.charAt(0);
}

// Call the function and log the result
console.log(isCapitalized("Hello")); // true

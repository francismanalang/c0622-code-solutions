/* exported capitalizeWords */
// define the function
// assign an empty string in a new variable
// take the string at index 0 and use the toUpperCase() to capitalize
// add the string at index 0 in the empty string
// write a for loop that iterates through the array starting at index 1
// write an if statement that looks for ' ' at index i - 1
// if an empty space is found at index i -1, use the toUpperCase() method to capitalize
// if index i - 1 is NOT an empty space, use the toLowerCase() method
// in each if statement, add the value of i into the empty string
// return the new string from the function

function capitalizeWords(string) {
  var capitalizedWords = '';
  capitalizedWords += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      capitalizedWords += string[i].toUpperCase();
    } else {
      capitalizedWords += string[i].toLowerCase();
    }
  }
  return capitalizedWords;
}

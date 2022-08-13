/* exported isPalindromic */
// define the function
// assign an empty string into the variable newString
// write a for loop that iterates through the string
// within the for loop, write an if statement that pushes every letter into the variable newString if its not a space
// write another for loop that iterates backwards through the newString variable
// add the letters of the newString variable into the variable finalString
// write an if statement that checks if newString and finalString are equal
// if they're equal, return true, if not, return false

function isPalindromic(string) {
  var newString = '';
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }
  for (var k = newString.length - 1; k >= 0; k--) {
    finalString += newString[k];
  }
  if (newString === finalString) {
    return true;
  } else {
    return false;
  }
}

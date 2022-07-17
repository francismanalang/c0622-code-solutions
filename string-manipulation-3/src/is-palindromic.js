/* exported isPalindromic */
// define the function
// assign an empty string into the variable newString
// write a for loop to iterate through the string backwards
// add the values of string[i] into newString
// if the newString is equal to string, return true, if not, return false

function isPalindromic(string) {
  var newString = '';
  for (var k = 0; k < string.length; k++) {
    if (string[k] === ' ') {
      var stringArray = string.split(' ');
      newString += stringArray[1];
      newString += stringArray[0];
    }
    if (newString === string) {
      return newString;
    }
  }
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  if (newString === string) {
    return true;
  } else {
    return false;
  }
}

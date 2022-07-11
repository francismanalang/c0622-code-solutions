/* exported lastChars */
// define the function
// assign an empty string in the variable newString
// write an if statement checking if string.length is greater than length
// if so, write a for loop that iterates from the end of the array at index length

function lastChars(length, string) {
  var newString = '';
  var finalString = '';
  if (string.length > length) {
    for (var i = string.length; i > length; i--) {
      newString += string[i];
    }
  }
  if (string.length < length) {
    for (var j = 0; j < string.length; j++) {
      newString += string[j];
    }
    return newString;
  }
  for (var k = newString.length - 1; k >= 0; k--) {
    finalString += newString[k];
  }
  return finalString;
}

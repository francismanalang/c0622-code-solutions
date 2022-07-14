/* exported firstChars */
// define the function
// assign an empty string into the variable newString
// write an if statement that checks if the length is less than string.length
// if so, write a for loop that uses length in the conditional expression
// if not, use string.length in the condition expression
// add the values of i into the variable newString
// return newString from the function

function firstChars(length, string) {
  var newString = '';
  if (string.length > length) {
    for (var i = 0; i < length; i++) {
      newString += string[i];
    }
  } else if (string.length < length) {
    for (var j = 0; j < string.length; j++) {
      newString += string[j];
    }
  } else {
    return string;
  }
  return newString;
}

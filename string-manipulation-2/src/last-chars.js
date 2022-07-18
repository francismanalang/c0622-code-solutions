/* exported lastChars */
// define the function
// assign an empty string in the variable newString
// assign an empty string in the variable final string (will use to reverse the word)
// write an if statement checking if string.length is greater than length
// if so, write a for loop that iterates from the end of the array at index string.length - length
// add string[i] into the variable newString
// write another if statement checking if string.length < length
// if so, just iterate normally and add string[j] into the variable newSting
// write a for loop that iterates from the end of the string to reverse the words
// add newString[k] into the variable finalString

function lastChars(length, string) {
  var newString = '';
  var finalString = '';
  if (string.length > length) {
    for (var i = string.length - 1; i >= string.length - length; i--) {
      newString += string[i];
    }
  } else if (string.length <= length) {
    for (var j = 0; j < string.length; j++) {
      newString += string[j];
    }
    return newString;
  }
  for (var l = newString.length - 1; l >= 0; l--) {
    finalString += newString[l];
  }
  return finalString;
}

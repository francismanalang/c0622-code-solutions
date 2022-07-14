/* exported swapChars */
// define the function
// assign an empty string in the variable newWord
// write a for loop that iterates through the string
// when the loop hits the firstIndex, switch it with the secondindex
// when the loop hits the secondIndex, switch it with the firstIndex
// push the values of i into the the variable newString
// return the variable newString from the function

function swapChars(firstIndex, secondIndex, string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[firstIndex] && string[i] !== string[secondIndex]) {
      newWord += string[i];
    } else if (string[i] === string[firstIndex]) {
      newWord += string[secondIndex];
    } else if (string[i] === string[secondIndex]) {
      newWord += string[firstIndex];
    }
  }
  return newWord;
}

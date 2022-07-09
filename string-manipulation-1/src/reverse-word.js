/* exported reverseWord */
// define the function
// assign an empty string to a new variable reversedWord
// write a for loop that iterates from the end of the string
// add the value of i into an empty string variable
// return the new variable from the function

function reverseWord(word) {
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

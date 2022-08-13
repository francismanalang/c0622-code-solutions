/* exported reverseWords */
// use split to turn the string into an array of words
// assign an empty string to the variable word
// assign an empty array to the variable reverseWords
// write a for loop that iterates through the array of words
// within the code block, write another for loop that iterates through each string in the array starting from the end
// add each letter to the variable word
// each time the word is reversed, it is pushed into the reverseWords array and the variable word is equal to an empty string
// once the for loop has completed, use the join method on the reverseWords array and return it from the function

function reverseWords(string) {
  var splitWords = string.split(' ');
  var word = '';
  var reverseWords = [];

  for (var i = 0; i < splitWords.length; i++) {
    for (var k = splitWords[i].length - 1; k >= 0; k--) {
      word += splitWords[i][k];
    }
    reverseWords.push(word);
    word = '';
  }
  return reverseWords.join(' ');
}

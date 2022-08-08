/* exported reverseWords */

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

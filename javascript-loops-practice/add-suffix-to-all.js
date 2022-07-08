/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var completedWords = [];
  for (var i = 0; i < words.length; i++) {
    var append = words[i] + suffix;
    completedWords.push(append);
  } return completedWords;
}

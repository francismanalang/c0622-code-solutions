/* exported capitalize */
// define the function
// take the parameter word at index 0 and assign it to the variable firstChar
// take the firstChar variable and use the .toUpperCase method
// return the string from the function

function capitalize(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[0]) {
      var upperCaseLetter = word[0].toUpperCase();
      newWord += upperCaseLetter;
    } else {
      var lowerCaseLetter = word[i].toLowerCase();
      newWord += lowerCaseLetter;
    }
  }
  return newWord;
}

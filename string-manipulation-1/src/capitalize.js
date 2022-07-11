/* exported capitalize */
// define the function
// take the parameter word at index 0 and assign it to the variable firstChar
// take the firstChar variable and use the .toUpperCase method
// return the string from the function

function capitalize(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}

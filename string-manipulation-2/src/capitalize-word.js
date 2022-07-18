/* exported capitalizeWord */
// define the function
// assign an empty string to a new variable
// use the toUpperCase() method that take word at index 0
// capitalize word at 0 and add it to the empty string
// wrtie a for loop that iterates through the word starting at index 1
// write an if statement and use the toLowerCase() method to check for the string 'javascript'
// if it is 'javascript', return 'JavaScript' from the function
// if it's not the string 'javascript' make all the values of i lowercaser and add it to the new string variable
// return the new variable from the function

function capitalizeWord(word) {
  var capitalizedWord = '';
  capitalizedWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (word.toLowerCase() === 'javascript') {
      return 'JavaScript';
    }
    capitalizedWord += word[i].toLowerCase();
  }
  return capitalizedWord;
}

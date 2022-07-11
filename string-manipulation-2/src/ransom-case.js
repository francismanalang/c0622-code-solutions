/* exported ransomCase */
// define the function
// assign an empty string into a new variable
// write a for loop that iterates through the string
// use modulus to check if i is odd or even
// if index i is odd, capitalize the values of i
// if index i is even, lowercase the values of i

function ransomCase(string) {
  var ransomWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      var lowerLetter = string[i].toLowerCase();
      ransomWord += lowerLetter;
    } else if (i % 2 === 1) {
      var upperLetter = string[i].toUpperCase();
      ransomWord += upperLetter;
    }
  }
  return ransomWord;
}

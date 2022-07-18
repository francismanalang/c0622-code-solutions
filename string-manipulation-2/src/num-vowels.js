/* exported numVowels */
// define the function
// assign the number 0 into a new variable named counter
// write a for loop that iterates through the string
// if a vowel is found, counter++
// return the counter from the function

function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      counter++;
    }
  }
  return counter;
}

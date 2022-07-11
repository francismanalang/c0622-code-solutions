/* exported isUpperCased */
// define the function
// write an if statement to check if all the letter in 'word' are uppercased
// if true, return true, if not, return false

function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  }
  return false;
}

/* exported isLowerCased */
// define the function
// write an if statement to check if all the letter in 'word' are lowercased
// if true, return true, if not, return false

function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  }
  return false;
}

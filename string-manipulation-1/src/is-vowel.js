/* exported isVowel */
// define the function
// wrtie an if statement that checks if the character is a vowel
// maybe use (||)?
// if character is vowel, return true, else, return false

function isVowel(character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  }
  if (character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
    return true;
  }
  return false;
}

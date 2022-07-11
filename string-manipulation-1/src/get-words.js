/* exported getWords */
// define the function
// write an if statement that checks if the string has any value. the return value has to be an array
// Use the split method to find a space between the string. If there is a space
// the words will be separated

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}

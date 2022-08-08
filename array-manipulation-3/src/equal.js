/* exported equal */
// write an if statement that checks if the length of the first and second array are NOT equal
// if the condition is true, return false
// write a for loop to check if the contents of the first array and second array are the same
// if they are, return true, if not, return false

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
}

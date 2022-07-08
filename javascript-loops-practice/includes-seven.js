/* exported includesSeven */
// create a for loop that iterates through the array
// within the for loop, write an if statement checking for the number 7
// if 7 is present, return true, if not, return false

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}

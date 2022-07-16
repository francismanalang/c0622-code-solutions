/* exported includes */
// define the function
// write a for loop that iterates through the array
// write an if statement that checks if the value is in the array
// if it is, return true, else, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

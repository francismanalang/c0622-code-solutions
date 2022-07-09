/* exported tail */
// define the function
// assign an empty array in a new variable
// write a for loop that iterates through the array starting at the index 1
// push the value of i into the new variable
// return the new variable from the function

function tail(array) {
  var tailElements = [];
  for (var i = 1; i < array.length; i++) {
    tailElements.push(array[i]);
  }
  return tailElements;
}

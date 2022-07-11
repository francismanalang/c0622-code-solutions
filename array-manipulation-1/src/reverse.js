/* exported reverse */
// define the function
// assign an empty array to a new variable
// write a for loop that iterates from the end of the array
// push the values of i into the new variable
// return the new variable from the function

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

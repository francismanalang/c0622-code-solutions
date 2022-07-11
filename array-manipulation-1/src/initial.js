/* exported initial */
// define the function
// assign an empty array in a new varibale
// write a for loop that iterates through the array but stops before the last index
// push the value of i into the new variable
// return the new variable from the fucntion

function initial(array) {
  var initialElements = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialElements.push(array[i]);
  }
  return initialElements;
}

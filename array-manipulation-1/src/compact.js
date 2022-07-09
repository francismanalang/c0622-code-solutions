/* exported compact */
// define the function
// assign an empty array into a new variable
// write a for loop that iterates through the whole array
// write an if statement that only accepts truthy values
// if a truthy value is found, push that value into the new variable
// return the new variable from the function

function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }

  }
  return compactArray;
}

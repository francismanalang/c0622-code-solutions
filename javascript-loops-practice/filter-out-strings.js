/* exported filterOutStrings */
// make a new variable with an empty array
// create a for loop iterating through the index of the strings
// write an if statement that checks if the value in the array is a number
// if so, push that value into the empty array

function filterOutStrings(values) {
  var noStringsArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      noStringsArray.push(values[i]);
    }
  }
  return noStringsArray;
}

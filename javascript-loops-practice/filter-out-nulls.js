/* exported filterOutNulls */
// make a variable with an empty array (noNulls)
// create a for loop iterating through the values of the array at their index
// create an if statement for when encountering a null
// if the value is NOT null, it will be pushed into the new array noNulls
// noNulls will be returned from the function

function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}

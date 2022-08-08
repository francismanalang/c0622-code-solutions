/* exported flatten */
// assign an empty array into a variable called output
// write a for loop that iterates through the array
// write an if statement that checks if the values of array is an array
// if it is, write a for loop that iterates through the array at array[i] and push the values into output
// if the value is NOT an array, push the values of array[i] into output
// return output

function flatten(array) {
  var output = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var f = 0; f < array[i].length; f++) {
        output.push(array[i][f]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}

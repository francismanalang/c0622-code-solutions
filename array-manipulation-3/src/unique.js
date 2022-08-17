/* exported unique */
// assign an empty array into the variable output
// wirte a for loop that iterates through the array
// write an if statement that checks if the values of the array are NOT in output
// if the condition is true, push the value into output
// return the output

function unique(array) {
  var output = [];

  for (var i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}

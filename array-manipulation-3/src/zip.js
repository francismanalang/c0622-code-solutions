/* exported zip */
// assign an empty array into two variables named array and output
// write a for loop that iterates through the first array
// if the length of first is equal to the second, push the value of first[i] and second[i] into array
// push the value of array into output and then clear the value of array
// if the length of the first and second are not equal, check if any of the values of second[i] are not equal to undefined
// if it is not equal to undefined, push the value of first[i] and second[i] into array
// push the value of array into output and then clear the value of array
// return the variable output

function zip(first, second) {
  var output = [];
  var array = [];

  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      array.push(first[i]);
      array.push(second[i]);
      output.push(array);
      array = [];
    }
  } else {
    for (var k = 0; k < second.length; k++) {
      array.push(first[k]);
      array.push(second[k]);
      output.push(array);
      array = [];
    }
  }
  return output;
}

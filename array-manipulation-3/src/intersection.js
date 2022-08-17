/* exported intersection */
// assign an empty array into the variable output
// write a for loop that iterates through the first array
// write an if statement that checks if the values of the second array are in the first array
// if the condition is true, push the value of the first array into the variable output
// return the output

function intersection(first, second) {
  var output = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      output.push(first[i]);
    }
  }
  return output;
}

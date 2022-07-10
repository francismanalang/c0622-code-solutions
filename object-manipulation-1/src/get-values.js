/* exported getValues */
// define the function
// assign an empty array into a variable names values
// write a for in loop that gets the objects properties in the variable key
// use the key variable to get the property values
// push those values into the the empty values array
// return the variable values from the function

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

/* exported setValue */
// define the function
// use bracket notation to get the object at key to make a new property
// assign value to that property and assign the result into the variable result
// return result from the function

function setValue(object, key, value) {
  var result = object[key] = value;
  return result;
}

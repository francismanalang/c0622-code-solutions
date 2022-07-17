/* exported invert */
// define the function
// create a new object and assign it to a variable
// write a for in loop that gets all the properties of source
// switch the properties and values and put them in the new object
// return the new object from the function

function invert(source) {
  var newObject = {};
  for (var prop in source) {
    newObject[source[prop]] = prop;
  }
  return newObject;
}

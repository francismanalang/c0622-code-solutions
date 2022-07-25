/* exported omit */
// define the function
// use a for in loop to get the source props
// write a for loop that iterates through the keys
// if the key is found within the object, delete it
// return the new object from the function

function omit(source, keys) {
  var newObject = {};
  for (var prop in source) {
    newObject[prop] = source[prop];
  }
  for (var i = 0; i < keys.length; i++) {
    if (newObject[keys[i]]) {
      delete newObject[keys[i]];
    }
  }
  return newObject;
}

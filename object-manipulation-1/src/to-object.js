/* exported toObject */
// deifne the function
// make a new variable containing an empty object
// take the keyValuePair at index 0 and assign it as the property of the object
// take the keyValuePair at index 1 and assign it as the value of the object
// return the object from the function

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

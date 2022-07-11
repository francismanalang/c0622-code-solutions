/* exported getKeys */
// define the function
// take an empty array and assign it to the variable keys
// use a for in loop to get the objects properties (prop)
// push the value of prop into the keys array
// return keys from the function

function getKeys(object) {
  var keys = [];
  for (var prop in object) {
    keys.push(prop);
  }
  return keys;
}

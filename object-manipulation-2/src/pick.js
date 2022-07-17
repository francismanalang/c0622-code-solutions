/* exported pick */
// define the function
// use a for in loop to get the source props
// if the source props match the keys
// return the keys with their values

function pick(source, keys) {
  var newObject = {};
  for (var prop in source) {
    for (var i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        newObject[prop] = source[prop];
      } else if (source[prop] === undefined) {
        return newObject;
      }
    }
  }
  return newObject;
}

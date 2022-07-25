/* exported defaults */
// define the function
// write a for in loop to get all the properties of source
// if the properties of the sources array are NOT in target, add it to target
// write an extra if statement that checks for null since it is a falsey value
// if one of the values in target are null, they should stay null

function defaults(target, source) {
  for (var prop in source) {
    if (!target[prop] && target[prop] !== null) {
      target[prop] = source[prop];
    }
  }
  return target;
}

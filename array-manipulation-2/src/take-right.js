/* exported takeRight */
// define the function
// write an if statement that checks if array.length is less than or equal to count
// if it is, return the array
// if array.length is greater than count, slice the array at array.length - count

function takeRight(array, count) {
  if (array.length <= count) {
    return array;
  } else if (array.length > count) {
    return array.slice(array.length - count);
  }
}

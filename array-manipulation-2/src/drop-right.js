/* exported dropRight */
// define the function
// write an if statement that checks if the length of the array is less than or equal to count
// if so, return the array
// if the length of the array is greater than count
// use the slice method of the array at 0 and end at array.length - count

function dropRight(array, count) {
  if (array.length <= count) {
    return array;
  } else if (array.length > count) {
    return array.slice(0, array.length - count);
  }
}

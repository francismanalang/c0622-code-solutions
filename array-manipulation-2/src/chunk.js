/* exported chunk */

function chunk(array, size) {
  var finalArray = [];
  var newArray = [];
  if (array.length <= size) {
    return array;
  } else if (array.length > size) {
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i]);
      if (newArray.length === size) {
        finalArray.push(newArray);
        newArray = [];
      }
    }
  }
  if (newArray.length === 0) {
    return finalArray;
  } else {
    finalArray.push(newArray);
  }
  return finalArray;
}

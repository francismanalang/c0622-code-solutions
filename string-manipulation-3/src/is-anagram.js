/* exported isAnagram */
// put every single letter that is not a space into an object
// use a for in loop to get the properties of the object
// write a for loop that checks if the properties within the object are true
// if they are, return true,
// if not, return false

function isAnagram(firstString, secondString) {
  var firstStringObj = [];
  var secondStringObj = [];
  for (var i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondStringObj.push(secondString[i]);
    }
  }
  for (var k = 0; k < firstString.length; k++) {
    if (firstString[k] !== ' ') {
      firstStringObj.push(firstString[k]);
    }
  }
  // console.log(firstStringObj, secondStringObj);
  for (var f = 0; f < secondString.length; f++) {
    if (firstStringObj.includes(secondStringObj[f])) {
      delete secondStringObj[f];
    }
  }
  if (secondStringObj.length === 0) {
    return true;
  } else {
    return false;
  }
}

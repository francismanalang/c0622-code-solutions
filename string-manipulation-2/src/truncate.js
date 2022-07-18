/* exported truncate */
// define the function
// assign an empty string to a new variable
// write an if statement that checks if string.length is < or > length
// write a for loop within the if statement that adds the values of i in the empty string
// concatenate ellipsis into the new variable
// return the variable from the function

function truncate(length, string) {
  var wordTruncated = '';
  if (string.length > length) {
    for (var i = 0; i < length; i++) {
      wordTruncated += string[i];
    }
  } else if (string.length < length) {
    for (var j = 0; j < string.length; j++) {
      wordTruncated += string[j];
    }
  }
  if (string.length === length) {
    return string;
  }
  wordTruncated += '...';
  return wordTruncated;
}

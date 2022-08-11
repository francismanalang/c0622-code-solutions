/* exported titleCase */
// use split to turn the string into an array of words
// assign an empty array in the variable finalTitle
// Write a for loop that takes each word and capitalizes the first letter of each word and pushes it to the finalTitle array
// Write another for loop that checks for specific words such as Api and JavaScript and change them accordingly
// use the splice method to replace them in the array
// write an if statement to check for short words that should be lower cased
// use the splice method to replace them in the finalTitle array
// write anthor if statement to check for the word 'The'
// lowercase the word if it is not the first letter of the title
// write another if statement that checks for the word 'the'
// if the previous word includes colon, then capitalize the first letter
// write an if statement that checks if a word includes a dash symbol
// if it does, split the word at the dash and capitalize the first letter of the second word
// join the word with a dash and use the splice method to insert the new word in the finalTitle array
// write an if statement that checks if a word includes a colon
// if it does, split the word at the colon
// write an if statement that checks if the first word in the array is equal to 'Javascript'
// if it is true, replace it with 'JavaScript'
// join the array with a colon and use the splice method to replace the word in the array
// finally, use the join mehtod to join the finalTitle array with a space and return it from the function

function titleCase(string) {
  var title = string.toLowerCase().split(' ');
  var finalTitle = [];
  for (var i = 0; i < title.length; i++) {
    var cap = '';
    cap += title[i][0].toUpperCase();
    for (var f = 1; f < title[i].length; f++) {
      cap += title[i][f];
    }
    finalTitle.push(cap);
  }
  for (var k = 0; k < finalTitle.length; k++) {
    if (finalTitle[k] === 'Api') {
      finalTitle.splice(k, 1, 'API');
    } else if (finalTitle[k] === 'Javascript') {
      finalTitle.splice(k, 1, 'JavaScript');
    }
    if (finalTitle[k] === 'In') {
      finalTitle.splice(k, 1, 'in');
    } else if (finalTitle[k] === 'And') {
      finalTitle.splice(k, 1, 'and');
    } else if (finalTitle[k] === 'For') {
      finalTitle.splice(k, 1, 'for');
    } else if (finalTitle[k] === 'Of') {
      finalTitle.splice(k, 1, 'of');
    } else if (finalTitle[k] === 'On') {
      finalTitle.splice(k, 1, 'on');
    } else if (finalTitle[k] === 'To') {
      finalTitle.splice(k, 1, 'to');
    }
    if (finalTitle[k] === 'The' && k !== 0) {
      finalTitle.splice(k, 1, 'the');
    }
    if (finalTitle[k] === 'the' && finalTitle[k - 1].includes(':')) {
      finalTitle.splice(k, 1, 'The');
    }
    if (finalTitle[k].includes('-')) {
      var split = finalTitle[k].split('-');
      var splitCap = '';
      splitCap += split[1][0].toUpperCase();
      for (var r = 1; r < split[1].length; r++) {
        splitCap += split[1][r];
      }
      split.splice(1, 1, splitCap);
      finalTitle.splice(k, 1, split.join('-'));
    }
    if (finalTitle[k].includes(':')) {
      var splitColon = finalTitle[k].split(':');
      if (splitColon[0] === 'Javascript') {
        splitColon.splice(0, 1, 'JavaScript');
        finalTitle.splice(k, 1, splitColon.join(':'));
      }
    }
  }
  return finalTitle.join(' ');
}

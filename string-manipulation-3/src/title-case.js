/* exported titleCase */

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

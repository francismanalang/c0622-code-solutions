var letters = document.querySelectorAll('span');

for (var i = 0; i < letters.length; i++) {
  var letter = letters[i];
  letter.addEventListener('keydown', function typingTutor(event) {
    if (letter[0] === 'g') {
      letter[0].className = 'color';
      letter[1].className = 'line';
    } else {
      letter[0].className = 'line wrong-color';
    }
    if (letter[1] === 'r') {
      letter[1].className = 'color';
    } else {
      letter[1].className = 'line wrong-color';
    }
  });
}

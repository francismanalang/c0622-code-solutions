var letters = document.querySelectorAll('span');

var counter = 0;

function typingTutor(event) {
  if (letters[counter].textContent === event.key) {
    letters[counter].className = 'color';
    letters[counter + 1].className = 'line';
    counter++;

  } else if (letters[counter].textContent !== event.key) {
    letters[counter].className = 'wrong-line wrong-color';
  }
}

document.addEventListener('keydown', typingTutor);

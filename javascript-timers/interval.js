var $countdownDisplay = document.querySelector('.countdown-display');

var myInterval = setInterval(function () {
  $countdownDisplay.textContent--;
  if ($countdownDisplay.textContent === '0') {
    clearInterval(myInterval);
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);

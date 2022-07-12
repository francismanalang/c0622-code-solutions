var lightToggle = 0;

var lightBulb = document.querySelector('.light-on');
var lightBackground = document.querySelector('.background-color');

function handleLightToggle(event) {
  lightToggle++;
  if (lightToggle % 2 === 0) {
    lightBulb.className = 'light-on';
    lightBackground.className = 'container height-width background-color';
  } else if (lightToggle % 2 === 1) {
    lightBulb.className = 'light-off';
    lightBackground.className = 'container height-width background-color1';
  }
}

lightBulb.addEventListener('click', handleLightToggle);

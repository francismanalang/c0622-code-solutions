var lightToggle = true;

var lightBulb = document.querySelector('.light-on');
var lightBackground = document.querySelector('.background-color');

function handleLightToggle(event) {
  if (lightToggle) {
    lightBulb.className = 'light-on';
    lightBackground.className = 'container height-width background-color';
    lightToggle = false;
  } else if (!lightToggle) {
    lightBulb.className = 'light-off';
    lightBackground.className = 'container height-width background-color1';
    lightToggle = true;
  }
}

lightBulb.addEventListener('click', handleLightToggle);

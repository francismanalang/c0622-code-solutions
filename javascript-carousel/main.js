var $buttons = document.querySelector('.icon-wrapper');
var $arrowLeft = document.querySelector('.arrow-left');
var $arrowRight = document.querySelector('.arrow-right');
var $image = document.querySelector('.image');
var imageIndex = 0;
var $allButtons = document.querySelectorAll('.image-button');
var imagesArray = [
  'images/025.png', 'images/001.png', 'images/004.png', 'images/007.png', 'images/039.png'
];

var intervalId = setInterval(arrowRightHandle, 3000);

function parentHandle(event) {
  for (var i = 0; i < $allButtons.length; i++) {
    if ($allButtons[i] === event.target) {
      $image.setAttribute('src', imagesArray[i]);
      $allButtons[i].className = 'image-button fa-solid fa-face-grin-stars fa-xl';
      imageIndex = i;
    } else {
      $allButtons[i].className = 'image-button fa-regular fa-face-grin-stars fa-xl';
    }
  }
  clearInterval(intervalId);
  intervalId = setInterval(arrowRightHandle, 3000);
}

$buttons.addEventListener('click', parentHandle);

function arrowButtonMatch() {
  for (var k = 0; k < $allButtons.length; k++) {
    if (k === imageIndex) {
      $allButtons[k].className = 'image-button fa-solid fa-face-grin-stars fa-xl';
    } else {
      $allButtons[k].className = 'image-button fa-regular fa-face-grin-stars fa-xl';
    }
  }
}

function arrowRightHandle(event) {
  $image.setAttribute('src', imagesArray[imageIndex + 1]);
  imageIndex++;
  arrowButtonMatch();

  if (imageIndex > 4) {
    $image.setAttribute('src', imagesArray[0]);
    imageIndex = 0;
    arrowButtonMatch();
  }
  clearInterval(intervalId);
  intervalId = setInterval(arrowRightHandle, 3000);
}

$arrowRight.addEventListener('click', arrowRightHandle);

function arrowLeftHandle(event) {
  $image.setAttribute('src', imagesArray[imageIndex - 1]);
  imageIndex--;
  arrowButtonMatch();

  if (imageIndex < 0) {
    $image.setAttribute('src', imagesArray[4]);
    imageIndex = 4;
    arrowButtonMatch();
  }
  clearInterval(intervalId);
  intervalId = setInterval(arrowRightHandle, 3000);
}

$arrowLeft.addEventListener('click', arrowLeftHandle);

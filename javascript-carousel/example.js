var $buttonParent = document.querySelector('.icon-wrapper');
var $arrowLeft = document.querySelector('.arrow-left');
var $arrowRight = document.querySelector('.arrow-right');
var $image = document.querySelector('.image');
var imageIndex = 0;
var $imageButton = document.querySelectorAll('.image-button');
var imagesArray = [
  'images/025.png', 'images/001.png', 'images/004.png', 'images/007.png', 'images/039.png'
];

function buttonParentHandle(event) {
  for (var i = 0; i < $imageButton.length; i++) {
    if ($imageButton[i] === event.target) {
      $imageButton[i].className = 'image-button fa-solid fa-face-grin-stars fa-xl';
      $image.setAttribute('src', imagesArray[i]);
      imageIndex = i;
    } else {
      $imageButton[i].className = 'image-button fa-regular fa-face-grin-stars fa-xl';
    }
  }
  clearInterval(setInterval(arrowRightHandle, 3000));
}

$buttonParent.addEventListener('click', buttonParentHandle);

function arrowLeftHandle(event) {
  if (imageIndex > 0 && imageIndex <= 4) {
    $image.setAttribute('src', imagesArray[imageIndex - 1]);
    imageIndex--;
    arrowCircleMatch();
  } else if (imageIndex <= 0) {
    $image.setAttribute('src', imagesArray[4]);
    imageIndex = 4;
    arrowCircleMatch();
  }
}

$arrowLeft.addEventListener('click', arrowLeftHandle);

function arrowRightHandle(event) {
  if (imageIndex >= 0 && imageIndex < 4) {
    $image.setAttribute('src', imagesArray[imageIndex + 1]);
    imageIndex++;
    arrowCircleMatch();
  } else if (imageIndex >= 4) {
    $image.setAttribute('src', imagesArray[0]);
    imageIndex = 0;
    arrowCircleMatch();
  }
}

$arrowRight.addEventListener('click', arrowRightHandle);

function arrowCircleMatch() {
  for (var i = 0; i < $imageButton.length; i++) {
    if (i === imageIndex) {
      $imageButton[i].className = 'image-button fa-solid fa-face-grin-stars fa-xl';
    } else {
      $imageButton[i].className = 'image-button fa-regular fa-face-grin-stars fa-xl';
    }
  }
}

setInterval(arrowRightHandle, 3000);

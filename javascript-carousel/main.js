var $imageButton1 = document.querySelector('.image1');
var $imageButton2 = document.querySelector('.image2');
var $imageButton3 = document.querySelector('.image3');
var $imageButton4 = document.querySelector('.image4');
var $imageButton5 = document.querySelector('.image5');
var $arrowLeft = document.querySelector('.arrow-left');
var $arrowRight = document.querySelector('.arrow-right');
var $image = document.querySelector('.image');

function imageOneHandle(event) {
  $image.setAttribute('src', 'images/025.png');
  $imageButton1.className = 'image1 fa-solid fa-face-grin-stars fa-xl';
  $imageButton2.className = 'image2 fa-regular fa-face-grin-stars fa-xl';
  $imageButton3.className = 'image3 fa-regular fa-face-grin-stars fa-xl';
  $imageButton4.className = 'image4 fa-regular fa-face-grin-stars fa-xl';
  $imageButton5.className = 'image5 fa-regular fa-face-grin-stars fa-xl';
}

$imageButton1.addEventListener('click', imageOneHandle);

function imageTwoHandle(event) {
  $image.setAttribute('src', 'images/001.png');
  $imageButton1.className = 'image1 fa-regular fa-face-grin-stars fa-xl';
  $imageButton2.className = 'image2 fa-solid fa-face-grin-stars fa-xl';
  $imageButton3.className = 'image3 fa-regular fa-face-grin-stars fa-xl';
  $imageButton4.className = 'image4 fa-regular fa-face-grin-stars fa-xl';
  $imageButton5.className = 'image5 fa-regular fa-face-grin-stars fa-xl';
}

$imageButton2.addEventListener('click', imageTwoHandle);

function imageThreeHandle(event) {
  $image.setAttribute('src', 'images/004.png');
  $imageButton1.className = 'image1 fa-regular fa-face-grin-stars fa-xl';
  $imageButton2.className = 'image2 fa-regular fa-face-grin-stars fa-xl';
  $imageButton3.className = 'image3 fa-solid fa-face-grin-stars fa-xl';
  $imageButton4.className = 'image4 fa-regular fa-face-grin-stars fa-xl';
  $imageButton5.className = 'image5 fa-regular fa-face-grin-stars fa-xl';
}

$imageButton3.addEventListener('click', imageThreeHandle);

function imageFourHandle(event) {
  $image.setAttribute('src', 'images/007.png');
  $imageButton1.className = 'image1 fa-regular fa-face-grin-stars fa-xl';
  $imageButton2.className = 'image2 fa-regular fa-face-grin-stars fa-xl';
  $imageButton3.className = 'image3 fa-regular fa-face-grin-stars fa-xl';
  $imageButton4.className = 'image4 fa-solid fa-face-grin-stars fa-xl';
  $imageButton5.className = 'image5 fa-regular fa-face-grin-stars fa-xl';
}

$imageButton4.addEventListener('click', imageFourHandle);

function imageFiveHandle(event) {
  $image.setAttribute('src', 'images/039.png');
  $imageButton1.className = 'image1 fa-regular fa-face-grin-stars fa-xl';
  $imageButton2.className = 'image2 fa-regular fa-face-grin-stars fa-xl';
  $imageButton3.className = 'image3 fa-regular fa-face-grin-stars fa-xl';
  $imageButton4.className = 'image4 fa-regular fa-face-grin-stars fa-xl';
  $imageButton5.className = 'image5 fa-solid fa-face-grin-stars fa-xl';
}

$imageButton5.addEventListener('click', imageFiveHandle);

function arrowRightHandle(event) {
  if ($image.getAttribute('src') === 'images/025.png') {
    imageTwoHandle();
  } else if ($image.getAttribute('src') === 'images/001.png') {
    imageThreeHandle();
  } else if ($image.getAttribute('src') === 'images/004.png') {
    imageFourHandle();
  } else if ($image.getAttribute('src') === 'images/007.png') {
    imageFiveHandle();
  } else if ($image.getAttribute('src') === 'images/039.png') {
    imageOneHandle();
  }
}

$arrowRight.addEventListener('click', arrowRightHandle);

function arrowLeftHandle(event) {
  if ($image.getAttribute('src') === 'images/025.png') {
    imageFiveHandle();
  } else if ($image.getAttribute('src') === 'images/039.png') {
    imageFourHandle();
  } else if ($image.getAttribute('src') === 'images/007.png') {
    imageThreeHandle();
  } else if ($image.getAttribute('src') === 'images/004.png') {
    imageTwoHandle();
  } else if ($image.getAttribute('src') === 'images/001.png') {
    imageOneHandle();
  }
}

$arrowLeft.addEventListener('click', arrowLeftHandle);

setInterval(arrowRightHandle, 3000);

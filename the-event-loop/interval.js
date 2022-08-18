let currentCount = 3;

var int = setInterval(() => {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(int);
  }
}, 1000);

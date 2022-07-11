/* exported countdown */
function countdown(number) {
  var counting = [];
  var i = 0;
  while (i <= number) {
    counting.push(number);
    number--;
  }
  return counting;
}

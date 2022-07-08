/* exported oddOrEven */
// create an empty array that will contain strings
// create a for loop that iterates through the array
// write an if statement that checks if the values are odd or even (modulus?)
// push the string odd or even into the empty array

function oddOrEven(numbers) {
  var oddEvenStrings = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEvenStrings.push('even');
    } else {
      oddEvenStrings.push('odd');
    }
  } return oddEvenStrings;
}

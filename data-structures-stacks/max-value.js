/* exported maxValue */

function maxValue(stack) {
  let highestNumber = -Infinity;
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    const number = stack.pop();
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  return highestNumber;
}

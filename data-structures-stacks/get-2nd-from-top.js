/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }

  const firstItem = stack.peek();
  stack.pop();
  const secondItem = stack.peek();
  stack.push(firstItem);

  return secondItem;
}

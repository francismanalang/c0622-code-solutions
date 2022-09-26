/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }

  const firstItem = stack.peek();
  stack.pop();
  stack.push(value);
  stack.push(firstItem);
}

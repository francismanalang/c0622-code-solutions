/* exported take2nd */

function take2nd(queue) {
  const firstItem = queue.peek();
  queue.dequeue();
  if (queue.peek() === undefined) {
    return firstItem;
  }
  const secondItem = queue.peek();
  queue.enqueue(firstItem);
  queue.dequeue();
  return secondItem;
}

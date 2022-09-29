/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let current = queue.dequeue();
  let successor = queue.peek();
  while (current > successor) {
    queue.enqueue(current);
    current = queue.dequeue();
    successor = queue.peek();
  }
  return current;
}

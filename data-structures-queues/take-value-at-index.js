/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  for (let i = 0; i < index; i++) {
    const dequeue = queue.dequeue();
    queue.enqueue(dequeue);
  }
  return queue.dequeue();
}

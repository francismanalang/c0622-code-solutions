/* exported takeSmaller */

function takeSmaller(queue) {
  const firstItem = queue.peek();
  queue.dequeue();
  if (queue.peek() === undefined) {
    return firstItem;
  }
  const secondItem = queue.peek();
  if (firstItem < secondItem) {
    queue.dequeue();
    queue.enqueue(secondItem);
    return firstItem;
  } else if (firstItem === secondItem) {
    queue.dequeue();
    queue.enqueue(secondItem);
    return secondItem;
  } else if (firstItem > secondItem) {
    queue.dequeue();
    queue.enqueue(firstItem);
    return secondItem;
  }
}

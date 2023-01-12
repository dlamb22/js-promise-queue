export default class Queue {
  constructor() {
    this.items = [];
  }

  // Implementing various methods of javascript queue:

  // 1. adding element to the queue
  enqueue(promise) {
    this.items.push(promise);
  }

  // 2. removing element from the queue
  dequeue() {
    // checking if the queue is empty or not before removing it!
    if (this.isEmpty()) {
      return 'Queue is empty: underflow!';
    }
    return this.items.shift();
  }

  // 3. returning the Front element of
  front() {
    // checking if the queue is empty or not!
    if (this.isEmpty()) {
      return 'Queue is empty!';
    }
    return this.items[0];
  }

  // 4. returning true if the queue is empty.
  isEmpty() {
    return this.items.length == 0;
  }

  // 5. printing the queue.
  printQueue() {
    var queue = '';
    for (var i = 0; i < this.items.length; i++) {
      queue += this.items[i] + ' ';
    }
    return queue;
  }

  // 6. getting the size of the queue.
  size() {
    return this.items.length;
  }
}

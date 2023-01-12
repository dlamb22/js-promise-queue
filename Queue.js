export default class Queue {
  queue = [];
  pendingPromise = false;

  enqueue(promise) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        promise,
        resolve,
        reject,
      });
      this.dequeue();
    });
  }

  dequeue() {
    if (this.workingOnPromise) {
      return false;
    }
    const item = this.queue.shift();
    console.log(item);
    if (!item) {
      return false;
    }

    try {
      this.workingOnPromise = true;
      item
        .promise()
        .then((value) => {
          this.workingOnPromise = false;
          item.resolve(value);
          console.log(value);
          this.dequeue();
        })
        .catch((err) => {
          this.workingOnPromise = false;
          item.reject(err);
          this.dequeue();
        });
    } catch (err) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }
    return true;
  }

  // 3. returning the Front element of
  front() {
    // checking if the queue is empty or not!
    if (this.isEmpty()) {
      return 'Queue is empty!';
    }
    return this.queue[0];
  }

  // 4. returning true if the queue is empty.
  isEmpty() {
    return this.queue.length == 0;
  }

  // 5. printing the queue.
  printQueue() {
    var queue = '';
    for (var i = 0; i < this.queue.length; i++) {
      queue += this.queue[i] + ' ';
    }
    return queue;
  }

  // 6. getting the size of the queue.
  size() {
    return this.queue.length;
  }
}

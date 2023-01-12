import CallApi from './callApi.js';
import Queue from './Queue.js';

// creating object of the Queue class:
const queue = new Queue();

const url1 = 'https://jsonplaceholder.typicode.com/posts/1';

async function getData() {
  queue.enqueue(url1);
  const data = await CallApi(url1);
  return data;
}

queue.enqueue(() => CallApi(url1));
queue.enqueue(() => CallApi(url1));
queue.enqueue(() => CallApi(url1));
queue.enqueue(() => CallApi(url1));

// Adding elements to the queue
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// printing the current queue:
console.log('the current queue is: ', queue.printQueue());

// // printing the top element of the queue.
// var top_element = queue.front();
// console.log('The top element of the queue is: ', top_element);

// printing the size of the queue.
var size = queue.size();
console.log('The size of the queue is: ', size);

// // removing elements form queue:
// var removed_element = queue.dequeue();
// console.log('Removed element is: ', removed_element);
// removed_element = queue.dequeue();
// console.log('Removed element is: ', removed_element);

// // printing the current queue:
// console.log('The current queue is: ', queue.printQueue());

// // printing the top element of the queue.
// var top_element = queue.front();
// console.log('The top element of the queue is: ', top_element);

// // printing the size of the queue.
// var size = queue.size();
// console.log('The size of the queue is: ', size);

export default class Queue {
  #items = [];
  enQueue(element) {
    this.#items.push(element);
  }
  deQueue() {
    if (this.isEmpty()) {
      throw new Error("There no item to see");
    } else {
      return this.#items.shift();
    }
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("There no item to see");
    } else {
      return this.#items[0];
    }
  }
  isEmpty() {
    return this.#items.length === 0;
  }
  size() {
    return this.#items.length;
  }
}

const newQueue = new Queue();

console.log(newQueue.isEmpty())
console.log(newQueue.enQueue(1))
console.log(newQueue.enQueue(2))
console.log(newQueue.enQueue(3))
console.log(newQueue.size())
console.log(newQueue.deQueue())
console.log(newQueue.size())
console.log(newQueue.enQueue(5))
console.log(newQueue.size())
console.log(newQueue.peek())
console.log(newQueue.size())

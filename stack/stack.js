export default class Stack {
  #items = [];
  constructor() {}
  push(element) {
    this.#items.push(element);
  }
  pop() {
    if (this.#items.length === 0) {
      throw new Error("No item to pop");
    }
    return this.#items.pop();
  }
  peek() {
    if (this.#items.length === 0) {
      throw new Error("No item to peek");
    }
    return this.#items[this.#items.length - 1];
  }
  isEmpty() {
    return this.#items.length === 0;
  }
  size() {
    return this.#items.length;
  }
}



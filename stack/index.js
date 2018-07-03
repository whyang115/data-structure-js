export default class Stack {
  constructor() {
    this.stack = [];
    return this.stack;
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return !this.stack.length;
  }
  push(...args) {
    Array.from(args).map(val => {
      this.stack.push(val);
    });
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.size() - 1];
  }
  clear() {
    this.stack = [];
  }
  print() {
    this.stack.map(item => {
      console.log(item);
    });
  }
}

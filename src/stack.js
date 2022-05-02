const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack extends Array{
  //constructor() {
  //  this.container = [];
  //}
  static get [Symbol.species]() {
    return Array;
  }
  peek() {
    let top = this[this.length-1];
    return top;
  }
}

/*
const stack = new Stack();
console.log(stack);
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
console.log(stack);
*/

module.exports = {
  Stack
};

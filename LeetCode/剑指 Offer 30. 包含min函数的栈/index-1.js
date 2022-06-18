/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const minStackLength = this.minStack.length
  if (minStackLength > 0) {
    if (x <= this.minStack[minStackLength - 1]) {
      this.minStack.push(x)
    }
  } else {
    this.minStack.push(x)
  }
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
    this.minStack.pop()
  }
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log( minStack.min())  // -3
minStack.pop();
console.log(minStack.top())  // 0
console.log(minStack.min())  // -2

console.log('-----------')

const minStack2 = new MinStack();
minStack2.push(0)
minStack2.push(1)
minStack2.push(0)
console.log(minStack2.min())
minStack.pop()
console.log(minStack2.min())

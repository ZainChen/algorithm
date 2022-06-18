/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  // stackLength -> minValue
  this.minMap = new Map()
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  const stackLength = this.stack.length
  let min = stackLength > 0 ? this.minMap.get(stackLength - 1) : undefined
  if (min === undefined) {
    min = x
  } else if (x < min) {
    min = x
  }
  this.minMap.set(stackLength, min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const stackLength = this.stack.length
  if (stackLength > 0) {
    this.minMap.delete(this.stack.length)
    this.stack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const stackLength =  this.stack.length
  return stackLength > 0 ? this.stack[stackLength - 1] : undefined
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  const stackLength =  this.stack.length
  return stackLength > 0 ? this.minMap.get(stackLength) : undefined
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

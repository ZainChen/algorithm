[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>    - [Method2](#Method2)
>        - [code-js-2](#code-js-2)

# Title

>[Directory](#Directory)

剑指 Offer 30.&nbsp;包含min函数的栈 LCOF

English description is not available for the problem. Please switch to Chinese.

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
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

```

## Method2

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-2)

### Code

#### code-js-2

>[Directory](#Directory) | [Title](#Title) | [Method2](#Method2) | [index-2.js](./index-2.js "index-2.js")

```JavaScript
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

```


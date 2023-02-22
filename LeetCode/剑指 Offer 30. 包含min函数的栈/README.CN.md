[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>    - [方法2](#方法2)
>        - [code-js-2](#code-js-2)

# 标题

>[目录](#目录)

剑指 Offer 30.&nbsp;包含min函数的栈

<p>定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。</p>

<p>&nbsp;</p>

<p><strong>示例:</strong></p>

<pre>MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --&gt; 返回 -3.
minStack.pop();
minStack.top();      --&gt; 返回 0.
minStack.min();   --&gt; 返回 -2.
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ol>
	<li>各函数的调用总次数不超过 20000 次</li>
</ol>

<p>&nbsp;</p>

<p>注意：本题与主站 155 题相同：<a href="https://leetcode-cn.com/problems/min-stack/">https://leetcode-cn.com/problems/min-stack/</a></p>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

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

## 方法2

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-2)

### 代码

#### code-js-2

>[目录](#目录) | [标题](#标题) | [方法2](#方法2) | [index-2.js](./index-2.js "index-2.js")

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


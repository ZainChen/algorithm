[LeetCode](../README.CN.md) | [English](./README.md) | 简体中文

# 目录

>- [标题](#标题)
>- [解](#解)
>    - [方法1](#方法1)
>        - [code-js-1](#code-js-1)
>        - [code-ts-1](#code-ts-1)

# 标题

>[目录](#目录)

剑指 Offer 09.&nbsp;用两个栈实现队列

<p>用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 <code>appendTail</code> 和 <code>deleteHead</code> ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，<code>deleteHead</code>&nbsp;操作返回 -1 )</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
<strong>输出：</strong>[null,null,3,-1,-1]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
<strong>输出：</strong>[null,-1,null,null,5,2]
</pre>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= values &lt;= 10000</code></li>
	<li>最多会对<code>&nbsp;appendTail、deleteHead </code>进行<code>&nbsp;10000</code>&nbsp;次调用</li>
</ul>


# 解

## 方法1

>[目录](#目录) | [标题](#标题) | [JavaScript](#code-js-1), [TypeScript](#code-ts-1)

### 代码

#### code-js-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.js](./index-1.js "index-1.js")

```JavaScript
var CQueue = function() {
  this.stackOne = []
  this.stackTow = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackOne.push(value)
  return null
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.stackTow.length === 0) {
    if (this.stackOne.length === 0) {
      return -1
    }
    while(this.stackOne.length > 0) {
      this.stackTow.push(this.stackOne.pop())
    }
    return this.stackTow.pop()
  } else {
    return this.stackTow.pop()
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

let result = [null]

var obj = new CQueue()
result.push(obj.appendTail(3))
result.push(obj.deleteHead())
result.push(obj.deleteHead())
console.log(result)

result = [null]

var obj2 = new CQueue()
result.push(obj2.deleteHead())
result.push(obj2.appendTail(5))
result.push(obj2.appendTail(2))
result.push(obj2.deleteHead())
result.push(obj2.deleteHead())
console.log(result)

```

#### code-ts-1

>[目录](#目录) | [标题](#标题) | [方法1](#方法1) | [index-1.ts](./index-1.ts "index-1.ts")

```TypeScript
class CQueue {
  constructor() {
    this.stackOne = []
    this.stackTwo = []
  }

  stackOne: number[]

  stackTwo: number[]

  appendTail(value: number): void {
    this.stackOne.push(value)
  }

  deleteHead(): number {
    if (this.stackTwo.length === 0 && this.stackOne.length === 0) {
      return -1
    }
    if (this.stackTwo.length === 0) {
      while(this.stackOne.length > 0) {
        this.stackTwo.push(this.stackOne.pop())
      }
      return this.stackTwo.pop()
    }
    return this.stackTwo.pop()
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/

let result: number[] = [null]

var obj = new CQueue()
obj.appendTail(3)
result.push(null)
result.push(obj.deleteHead())
result.push(obj.deleteHead())
console.log(result)

result = [null]

var obj2 = new CQueue()
result.push(obj2.deleteHead())
obj2.appendTail(5)
result.push(null)
obj2.appendTail(2)
result.push(null)
result.push(obj2.deleteHead())
result.push(obj2.deleteHead())
console.log(result)

```


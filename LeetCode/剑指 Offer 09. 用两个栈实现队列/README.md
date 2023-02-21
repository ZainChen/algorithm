[LeetCode](../README.md) | English | [简体中文](./README.CN.md)

# Directory

>- [Title](#Title)
>- [Solution](#Solution)
>    - [Method1](#Method1)
>        - [code-js-1](#code-js-1)
>        - [code-ts-1](#code-ts-1)

# Title

>[Directory](#Directory)

剑指 Offer 09&nbsp;用两个栈实现队列 LCOF

English description is not available for the problem. Please switch to Chinese.

# Solution

## Method1

>[Directory](#Directory) | [Title](#Title) | [JavaScript](#code-js-1), [TypeScript](#code-ts-1)

### Code

#### code-js-1

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.js](./index-1.js "index-1.js")

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

>[Directory](#Directory) | [Title](#Title) | [Method1](#Method1) | [index-1.ts](./index-1.ts "index-1.ts")

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


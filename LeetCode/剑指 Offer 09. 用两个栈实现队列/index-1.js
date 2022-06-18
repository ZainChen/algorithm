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

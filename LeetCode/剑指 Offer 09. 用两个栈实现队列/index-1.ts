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

/**
 * apply 改变 this 指向的简单示例
 */
var name = "martin"
var obj = {
  name: "lucy",
  say: function(year, place) {
    console.log(this.name + " is " + year + " born from " + place);
  }
};
var say = obj.say;
setTimeout(function() {
  // lucy is 1996 born from China, this 改变指向了 obj
  say.apply(obj, ["1996", "China"])
} ,0);
// martin is 1996 born from China,this指向window，说明apply只是临时改变一次this指向
// 在非浏览器中, name 为 undefined, 因为没有默认的 window 对象绑定
say("1996", "China")

/**
 * apply 改变参数传入方式, 第一个参数为 null, 默认把 this 绑定到 windows 上
 * 立即执行, 不返回重新绑定之后的函数
 */
var arr = [1, 10, 5, 8, 3]
console.log('apply, math', Math.max.apply(null, arr))

/**
 * call 的传参方式, 第一个参数为 null, 默认把 this 绑定到 windows 上
 * 立即执行, 不返回重新绑定之后的函数
 */
var arr = [1, 10, 5, 8, 3]
console.log('call, math', Math.max.call(null, arr[0], arr[1], arr[2], arr[3], arr[4]))

/**
 * bind 的传参方式, 第一个参数为 null, 默认把 this 绑定到 windows 上
 * 返回重新绑定 `this` 之后的函数，便于稍后调用
 */
var arr = [1, 10, 5, 8, 3, 99]
let max = Math.max.bind(null, arr[0], arr[1], arr[2], arr[3], arr[4])
console.log('bind, math1', max())
console.log('bind, math1', max(arr[5]))

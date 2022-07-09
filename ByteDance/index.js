const funcStr = 'function test(value){console.log(value)}'
const funcTest = new Function(`return ${funcStr}`)
funcTest()('啦啦啦😝')
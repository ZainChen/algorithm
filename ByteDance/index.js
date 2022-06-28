console.log('begin')
new Promise(() => {
  console.log('promise 0')
  setTimeout(() => {
    console.log('setTimeout 0')
  })
  Promise.resolve()
    .then(() => {
      setTimeout(() => {
        console.log('setTimeout 1')
      }, 0)
      console.log('promise 1')
      Promise.resolve().then(() => console.log('promise 3'))
    })
    .then(() => {
      console.log('promise 2')
    })
})
console.log('end')

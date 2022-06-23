/**
 * @param {number} value
 * @return {number}
 */
var reverse = function(value) {
  let newValue = 0
  while(value) {
    newValue = newValue * 10 + value % 10
    value = parseInt(value / 10)
  }
  if (newValue < -(2**31 -1) || newValue > 2**31 -1) {
    return 0
  }
  return newValue
};

console.log(reverse(-1230922))
console.log(reverse(2123456789))

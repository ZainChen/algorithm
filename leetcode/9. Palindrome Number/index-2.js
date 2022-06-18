/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) {
    return false
  }

  let newNum = 0
  let temp = x
  while (temp) {
    newNum = newNum *10 + temp % 10
    temp = parseInt(temp / 10)
  }
  return newNum === x
};

console.log(isPalindrome(121))
console.log(isPalindrome(3728900))
console.log(isPalindrome(-121))
console.log(isPalindrome(0))

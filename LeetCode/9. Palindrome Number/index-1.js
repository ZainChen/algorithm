/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reverse = `${x}`.split('').reverse().join('');
  return reverse === `${x}`;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(0))

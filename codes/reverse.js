/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const isNegative = x < 0
  const nowNum = Math.abs(x)
  const numString = nowNum + ''
  let result = numString.split('').reverse().join('')
  result = isNegative ? -(+result) : +result
  const MAX = Math.pow(2, 31)
  if (result > MAX - 1 || result < -MAX) {
    return 0
  }
  return result
}

console.log(reverse(1234))
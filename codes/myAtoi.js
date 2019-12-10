/**
 * @param str
 * @returns {number}
 */
const myAtoi = (str) => {
  return Math.max(Math.min(parseInt(str) || 0, Math.pow(2,31)-1), -Math.pow(2,31))
}

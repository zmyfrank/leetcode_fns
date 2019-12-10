/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim()
  if (/[A-DF-Za-df-z]|\s/.test(s)){
    return false
  }
  const dotArr = s.split('.')
  if (dotArr.length > 2) {
    return false
  }
  if (dotArr[0] === '' || dotArr[1] === ''){
    return false
  }
  const stringArr = s.split('e')
  if (s.split('e').length > 2){
    return false
  }

  if (stringArr[1] === '') {
    return false
  }
  return !isNaN(parseFloat(s,10))
};
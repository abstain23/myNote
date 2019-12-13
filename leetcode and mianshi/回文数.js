/*
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
*/

var sun = function(x) {
  // if(x<0){
  //   return false
  // }
  // if((x+'').split('').reverse().join('')==x){
  //   return true
  // }else {
  //   return false
  // }

  let s =0
  let y = 0
  s=x
  while(x>=1){
    y = x%10 + y*10
    x = Math.floor(x/10)
  }
  return y===s
}
sun(123)
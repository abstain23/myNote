Function.prototype.myApply = function(context, arr) {
  if(typeof this !== 'function') {
    return 'err'
  }
  context = context || window
  context.fn = this
  let res
  if(!arr) {
    res = context.fn()
  }
  res = context.fn(...arr)  //如果有返回值
  delete context.fn
  return res 
}
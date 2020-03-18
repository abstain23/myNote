Function.prototype.mycall = function(context) {
  if(typeof this !== 'function') {
    return 'err'
  }
  context = context || window
  context.fn = this
  const arrs = [...arguments].slice(1)
  const res = context.fn(...arrs)  //如果有返回值
  delete context.fn
  return res
}

function ff(){
  console.log(this.name)
  return 1
}
const obj = {
  name: 'mycall'
}

ff.mycall(obj)
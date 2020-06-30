function copySymbol(obj) {
  const unique_proper = "00" + Math.random();
  if (obj.hasOwnProperty(unique_proper)) {
      arguments.callee(obj)//如果obj已经有了这个属性，递归调用，直到没有这个属性
  } else {
      return unique_proper;
  }
}
const isArray = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase() === 'array'
Function.prototype.myApply = function (context, arr) {
  if(typeof this !== 'function') {
    return 'err'
  }
  context = context || window
  const fnName = copySymbol(context)
  context[fnName] = this
  let res
  if (arr) {
    if (!isArray(arr)) {
      throw '第二个参数必须是数组'
    }
    res = context[fnName](...arr)  //如果有返回值
  } else {
    res = context[fnName]()
  }
  delete context[fnName]
  return res 
}
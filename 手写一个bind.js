//简易版本
// 返回一个函数 可以传入参数
Function.prototype.myBind = function(context) {
  var _this = this
  var context = context || window
  //取出bind的第二个到后面的参数
  var args = [...arguments].slice(1)
  return function () {
      return _this.apply(context, args.concat(...arguments))
  }
}
//如果有构造函数


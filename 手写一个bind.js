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

function Person() {
  this.name = 'p'
  console.log(this)
}
// var a = Person.bind({va:1})
var p = Person.call({ccc:'call'})

Function.prototype.myBind2 = function(ctx, ...args) {
  const _this = this
  const Temp = function() {}
  const fn = function(...args2) {
    return _this.apply(this instanceof fn ? this: ctx, [...args, ...args2])
  }
  // fn.prototype = _this.prototype  这样当我们直接修改fn.prototype的时候也会修改绑定函数的prototype

  Temp.prototype = _this.prototype
  fn.prototype = new Temp()
  return fn
}

function Person() {
  this.name = 'p'
  console.log(this)
}

Person.prototype.pp ='pp'
var a = Person.myBind2({ccc:1})
console.log(new a())



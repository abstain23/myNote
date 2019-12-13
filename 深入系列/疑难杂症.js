{
  let nAdd 
let t = function () {
  let n = 99
  nAdd = () => {
    n++
  }
  let t2 = function () {
    console.log(n)
  }
  return t2
}

let a1 = t()
let a2 = t()

nAdd()

a1()
a2()

//首先执行，a1 = t() 这是nadd赋值为 一个匿名函数   ，然后a2 = t()  这是nadd重新赋值了 所以后面nadd执行的是后面a2里面的重新赋值的那个nadd吧 所以a1 99  a2 100

}

var t = function() {
  var n = 99;
  var t2 = function() {
    n++
    console.log(n)
  }
  return t2;
};

var a1 = t();
var a2 = t();

a1(); // 100
a1(); // 101

a2(); // 100
a2(); // 101

// 我们会发现，n 的值都是从 99 开始，执行 一次a1() 的时候，值会加一，再执行一次，值再加一，但是 n 在 a1() 和 a2() 并不是公用的。你可以理解为：同一个函数形成的多个闭包的值都是相互独立的。


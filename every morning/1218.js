// js 赋值语句有返回值，就是等号右边的值！

function foo() {
  console.log( this.a );
}

var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };

o.foo(); //3
(p.foo = o.foo)(); //2 

function xx() {
  console.log(this.name)
}

var obj = {
  name: 'obj',
  yy(){
      console.log(this)
  }
}
var obj2 = {
  name: 'obj2'
}

obj.yy();

(obj2.zz = obj.yy)();


//逗号运算符，它将先计算左边的参数，再计算右边的参数值。然后返回最右边参数的值。

var a = 10, b = 20;
 
function CommaTest(){
    return a++, b++, 10;
}
 
var c = CommaTest();
 
alert(a); // 返回11
alert(b); // 返回21
alert(c); // 返回10

(12,obj.yy)() // window


////


var name = 222

var a = {
  name: '111',
  say() {
    console.log(this.name)
  }
}

var fun = a.say
fun()
a.say()

var b = {
  name: '333',
  say(fn){
    fn()
  }
}

b.say(a.say)

b.say = a.say

b.say()
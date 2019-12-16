const a = {}
const b = {key: 'b'}
const c = {key: 'c'}

a[b] = 123
console.log(a) //{[object Object]: 123}
a[c] = 456
console.log(a)  //{[object Object]: 456}
console.log(a[b])


//箭头函数没有this,只会使用最近的this

let obj1 = {
  name: 'obj1 name',
  print(){
    return() => {console.log(this.name)}
  }
}

let obj2 = {name: 'obj2 name'}

obj1.print()() // obj1 name
obj1.print().call(obj2) // obj1 name 箭头函数无this，绑定也无用
obj1.print.call(obj2)() //obj2 name


function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}
Foo.getName  = function() {
  console.log(2)
}
Foo.prototype.getName = function() {
  console.log(3)
}
var getName = function() {
  console.log(4)
}
function getName() {
  console.log(5)
}

Foo.getName() //2
getName() //4
Foo().getName() //1
getName（）//1
new Foo.getName() //2
new Foo().getName() //3
new new Foo().getName() //3

async function async1(){
  console.log('async1 start')
  awit async2()
  console.log('async1 end')
}

async function async2(){
  console.log('async2')
}

console.log('script start')

setTimeout(() => {
  console.log('settimeout0')
}, 0);

setTimeout(() => {
  console.log('settimeout3')
}, 3);

setImmediate(() => {console.log('setimmediate')})

process.nextTick(() => {console.log('nexttick')})

async1()

new Promise((resolve) => {
  console.log('promise1')
  resolve()
  console.log('promise2')
}).then(() => {
  console.log('promise3')
})

console.log('script end')  //script start -> 

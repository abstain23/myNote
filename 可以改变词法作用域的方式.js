function c() {
  console.log(a)
}
var a = 'cc'
c() // cc

//eval

function c() {
  eval('var a = "dd"')
  console.log(a)
}
var a = 'cc'
c() //dd

//with

var o1 = {
  a: 1
}
var o2 = {
  b: 2
}
function c(obj) {
  with(obj){
    a:3
  }
}
c(o1)
console.log(o1.a)
c(o2)
console.log(o2.a)
console.log(a)
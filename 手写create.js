// function A() {
//   this.name =  'a'
// }

// let a = Object.create(A)
// console.log(a)

function create(proto) {
  const F = function () {}
  F.prototype = {...proto}
  // F.prototype.constructor = proto.constructor
  return new F()
  // let obj = {}
  // obj.__proto__ = proto
  // // obj.constructor = proto.constructor
  // return obj
}

let obj = {a:1}
console.log(create(obj))

function Person() {
  this.name = 'person'
}
let p = new Person()
console.log(create(p))
console.log(Object.create(p))
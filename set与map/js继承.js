function F() { }
var f = new F()

console.log(F.prototype.constructor === F) // true
console.log(F.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
console.log(Object.__proto__ === Function.prototype) // true
console.log(Function.__proto__ === Function.prototype) // true


console.log(f.__proto__ === F.prototype) // true
console.log(F.prototype.__proto__ === Object.prototype) // true




if (typeof Object.create !== 'function') {
  Object.create = (proto) => {
    function F() { }
    F.prototype = proto
    return new F()
  }
}

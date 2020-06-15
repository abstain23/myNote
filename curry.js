function curry(fn, length) {
  length = length || fn.length
  return function(...args) {
    if (args.length < length) {
      return curry(sub_curry(fn, ...args),length - args.length)
    } else {
      return fn.call(this, ...args)
    }
  }
}

function sub_curry(fn, ...args) {
  return function (...newArgs) {
    return fn.apply(this, [...args, ...newArgs])
  }
}

var fn = curry(function (a, b, c) {
  return [a,b,c]
})
console.log(fn(1,2, 44))
console.log(fn(1, 2)(44))
console.log(fn(1)(2)(44))
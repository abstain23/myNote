var generateName = (function () {
  var endfix = 0
  return function (desc) {
    endfix++
    return `@@${desc}_${endfix}`
  }
})()

var SymbolPolyfill = function Symbol(desc) {
  if (this instanceof SymbolPolyfill) throw new TypeError('Symbom is not a function')
  var descString = desc === undefined ? undefined : String(desc)
  var symbol = Object.create({
    toString: function () {
      return this.__Name__
    },
    valueOf: function () {
      throw new Error('Cannot convert a Symbol value')
    }
  })
  Object.defineProperties(symbol, {
    '__Description__': {
      value: descString,
      writable: false,
      enumerable: false,
      configurable: false
    },
    '__Name__': {
      value: generateName(descString),
      writable: false,
      enumerable: false,
      configurable: false
    }
  })
  return symbol
}

var forMap = {}
Object.defineProperties(SymbolPolyfill, {
  'for': {
    value: function (desc) {
      var descString = desc === undefined ? undefined : String(desc)
      return forMap[descString] ? forMap[descString] : forMap[descString] = SymbolPolyfill(descString)
    },
    writable: true,
    enumerable: false,
    configurable: true
  },
  'keyFor': {
    value: function (symbol) {
      for (let key in forMap) {
        if(forMap[key] === symbol) return key
      }
    },
    writable: true,
    enumerable: false,
    configurable: true
  }
})

var a = SymbolPolyfill('a')
var b = SymbolPolyfill('a')
console.log(a === b)
console.log(a.toString())
var obj = {}
obj[a] = '1111'
obj[b] = '222'
console.log(obj)
// console.log(a + 1)
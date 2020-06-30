function copyNew(){
  const obj = {}
  const Constructor = [...arguments][0]
  obj.__proto__ = Constructor.prototype
  const res = Constructor.apply(obj,[...arguments].slice(1))
  return res && (typeof res === 'object') ? res : obj
}


const isObject = (obj) => typeof obj === 'object' && obj !== null
const isFunction = (fn) => typeof fn === 'function'

function newOperator(Constructor, ...args) {
  if (typeof Constructor !== 'function') {
    throw '第一个参数必须是一个函数'
  }
  // newOperator.target = Constructor
  const newObj = Object.create(Constructor.prototype)
  const res = Constructor.call(newObj, ...args)
  if (isObject(res) || isFunction(res)) {
    return res
  }
  return newObj
}

/**
 * new 做了什么
 * 1. 创建一个新的对象
 * 2. 这个对象的__proto__, 会指向构造函数的prototype
 * 3. this指向这个新到对象
 * 4. 执行构造函数中到代码
 * 5. 如果该构造函数返回的是引用类型，那么会返回该引用类型，否则返回这个新的对象
 */
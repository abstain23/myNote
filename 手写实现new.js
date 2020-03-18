function copyNew(){
  const obj = {}
  const Constructor = [...arguments][0]
  obj.__proto__ = Constructor.prototype
  const res = Constructor.apply(obj,[...arguments].slice(1))
  return typeof res === 'object' ? res : obj
}
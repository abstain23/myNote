function forOf(obj, cb) {
  let iterable, result
  if (typeof obj[Symbol.iterator] !== 'function') {
    throw new TypeError(obj + ' is not iterable')
  }
  if (typeof cb !== 'function') throw new TypeError('cb must bu calllable')
  iterable = obj[Symbol.iterator]()
  result = iterable.next()
  while (!result.done) {
    cb(result.value)
    result = iterable.next()
  }
}
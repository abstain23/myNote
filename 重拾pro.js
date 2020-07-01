const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// const isArray = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase() === 'array'
const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
function MyPromise(fn) {
  if (typeof fn !== 'function') {
    throw new Error('promise 必须接受一个函数作为参数')
  }
  let self = this
  self.value = undefined
  self.status = PENDING
  self.onRejectedCbs = []
  self.onFulfilledCbs = []

  function resolve(value) {
    if (self.status !== PENDING) return
    self.status = FULFILLED
    self.value = value
    if (self.onFulfilledCbs.length > 0) {
      setTimeout(() => {
        self.onFulfilledCbs.forEach(fn => fn())
      }, 0);
    }
  }

  function reject(reason) {
    if (self.status !== PENDING) return
    self.status = REJECTED
    self.value = reason
    if (self.onRejectedCbs.length > 0) {
      setTimeout(() => {
        self.onRejectedCbs.forEach(fn => fn())
      }, 0);
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
  const self = this
  return new MyPromise((resolve, reject) => {
    const handlePromise = (callback) => {
      try {
        const res = callback(self.value)
        if (res instanceof MyPromise) {
          res.then(resolve, reject)
        } else {
          resolve(res)
        }
      } catch (error) {
        reject(error)
      }
    }
    if (self.status === PENDING) {
      self.onFulfilledCbs.push(() => { handlePromise(onFulfilled) })
      self.onRejectedCbs.push(() => { handlePromise(onRejected) })
    } else if (self.status === FULFILLED) {
      handlePromise(onFulfilled)
    } else {
      handlePromise(onRejected)
    }
  })
}
MyPromise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    if (value instanceof MyPromise) {
      value.then(resolve, reject)
    } else {
      resolve(value)
    }
  })
}

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}

MyPromise.all = function (promises) {
  if (!isIterable(promises)) throw new TypeError('请传入一个可以迭代的对象')
  const length = promises.length
  let resIndex = 0, res = []
  return new MyPromise((resolve, reject) => {
    promises.forEach((p, index) => {
      MyPromise.resolve(p).then(value => {
        resIndex++
        res[index] = value
        if (resIndex === length) {
          resolve(res)
        }
      }).catch(err => reject(err))
    })
  })
}

MyPromise.race = function (promises) {
  if (!isIterable(promises)) throw new TypeError('请传入一个可以迭代的对象')
  return new MyPromise((resolve, reject) => {
    promises.forEach(p => {
      Promise.resolve(p).then(value => {
        resolve(value)
      }, reason => {
          reject(reason)
      })
    })
  })
}

// let promise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('cccc')
//   }, 1000);
// })
// promise.then((value) => {
//   console.log(value)
//   throw '111das'
// }).then(1,2).then(res => console.log(res), err => console.log(err))

// MyPromise.all([1, promise, 2]).then(res => {
//   console.log(res)
// })
const promise = MyPromise.resolve()
  .then(() => {
    return promise
  })
promise.catch(console.error)
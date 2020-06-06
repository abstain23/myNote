const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    // console.log('==')
    return reject(new TypeError('不能返回自己'))
  }
  
  if(x && typeof x === 'object' || typeof x === 'function') {
    let called // 默认没有调用成功
    try {
      let then = x.then // 取then的时候可能会发生错误 例如getter
      if(typeof then === 'function') {
        then.call(x, y => {
          // resolve(y)
          // 递归解析promise
          if(called) return // 防止多次调用
          called = true
          resolvePromise(promise2, y, resolve, reject)
        },r => {
          if(called) return
          called = true
          reject(r)
        })
      }
    } catch (error) {
      if(called) return
      called = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}
class Promise {
  constructor(excutor) { // excutor 立即执行的
    this.state = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = (value) => { //成功
      if(value instanceof Promise) {
        return value.then(resolve, reject)
      }
      if (this.state === PENDING) {
        this.state = RESOLVED
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      this.state = REJECTED
      this.reason = reason
      this.onRejectedCallbacks.forEach(fn => fn())
    }
    try {
      excutor(resolve, reject) // 出错直接到reject
    } catch (error) {
      reject(error)
    }
  }

  then(onResolved, onRejected) {
    // 可选参数 穿透
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    // then 方法应该返回一个新的promise
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === RESOLVED) {
        // console.log('resolved')
        setTimeout(() => {
          try {
            let res = onResolved(this.value)
            // console.log(res)
            resolvePromise(promise2, res, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.state === REJECTED) {
        // console.log('rejected')
        setTimeout(() => {
          try {
            let res = onRejected(this.reason)
            resolvePromise(promise2, res, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.state === PENDING) {
        // console.log('pending')
        this.onResolvedCallbacks.push(() => {
          // onResolved(this.value)
          setTimeout(() => {
            try {
              let res = onResolved(this.value)
              // console.log(res)
              resolvePromise(promise2, res, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          // onRejected(this.reason)
          setTimeout(() => {
            try {
              let res = onRejected(this.reason)
              resolvePromise(promise2, res, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })
    return promise2
  }
  catch(onRejected) {
    return this.then(null, onRejected)
  }
  static resolve(value) {
    return new Promise(resolve => {
      resolve(value)
    })
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      let index = 0, results = []
      for(let i = 0; i< promises.length; i++) {
        let item = promises[i]
        if(item instanceof Promise) {
          item.then(res => {
            results[i] = res
            index ++
            if(index === promises.length) {
              resolve(results)
            }
          }).catch(reason => {
            reject(reason)
          })
        } else {
            results[i] = item
            index ++
            if(index === promises.length) {
              resolve(results)
            }
        }
      }
    })
  }
  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(item => {
        if(item instanceof Promise) {
          item.then(res => resolve(res))
        } else {
          resolve(item)
        }
      })
    })
  }
}

module.exports = Promise

/*
    const handle = (cb, data) => {
      try {
        const res = cb(data)
        res instanceof Promise  ? res.then(resolve, reject) : resolve(res)
      } catch (error) {
       reject(error)
      }
    }
    if(this.state === RESOLVED) {
     handle(onResolved, this.value)
    }
    if(this.state === REJECTED) {
      handle(onRejected, this.reason)
    }
    if(this.state === PENDING){
      this.onResolvedCallbacks.push(() => {
        // onResolved(this.value)
        handle(onResolved, this.value)
      })
      this.onRejectedCallbacks.push(() => {
        // onRejected(this.reason)
        handle(onRejected, this.reason)
      })
    }
    */
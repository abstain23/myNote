const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class MyPromise {
  constructor(fn) {
    this.state = PENDING
    //终值
    this.value = null
    //拒因
    this.reason = null
    //成功回调队列
    this.onResolvedCbs = []
    //拒绝回调队列
    this.onRejectedCbs = []

    const resolve = value => {
      setTimeout(() => {
        if(this.state === PENDING) {
          this.state = RESOLVED
          this.value = value
          this.onResolvedCbs.map(cb => {
            this.value = cb(this.value)
          })
        }
      })
    }

    const reject = reson => {
      setTimeout(() => {
        if(this.state === PENDING) {
          this.state = REJECTED
          this.reason = reson
          this.onRejectedCbs.map(cb => {
            this.reason = cb(this.reason)
          })
        }
      })
    }
    try {
      fn(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }

  then(onResolved, onRejected) {
    typeof onResolved === 'function' && this.onResolvedCbs.push(onResolved)
    typeof onRejected === 'function' && this.onRejectedCbs.push(onRejected)
    return this
  }
}

new MyPromise((resolve,reject) => {
  setTimeout(() => {
    resolve(2)
  },1000)
}).then(res => {
  console.log(res)
  return res + 1
}).then(res => {
  console.log(res)
})
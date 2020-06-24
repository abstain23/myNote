// function ccPromise(cb) {
//   var that = this
//   that.onResolvedCallback = []
//   function resolve(value) {
//     setTimeout(() => {
//       that.date = value
//       that.onResolvedCallback.forEach(callback => callback(value))
//     })
//   }
//   cb(resolve.bind(that))
// }
// ccPromise.prototype.then = function(onResolved) {
//   var that = this
//   return new ccPromise(resolve => {
//     that.onResolvedCallback.push(function() {
//       var result = onResolved(that.data)
//       if(result instanceof ccPromise) {
//         result.then(resolve)
//       } else {
//         resolve(result)
//       }
//     })
//   })
// }

// new ccPromise(resolve => {
//   setTimeout(() => {
//     resolve(1)
//   }, 500)
// })
//   .then(res => {
//     console.log(res)
//     return new ccPromise(resolve => {
//       setTimeout(() => {
//         resolve(2)
//       }, 500)
//     })
//   })
//   .then(console.log)

//极简型

/**
 * excutor 执行器函数（同步）
 */
!function () {
  function Promise(excutor) {
    this.status = 'pendding'
    this.data = undefined
    this.callbacks = [] //{onResloved:() => {}, onRejected:() => {}}
    // let _this = this
    const resolve = (value) => {
      if (this.status !== 'pendding') return
      this.status = 'resolved'
      this.data = value
      if (this.callbacks.length > 0) {
        setTimeout(() => {
          this.callbacks.forEach(cbObj => {
            cbObj['onResolved'](value)
          })
        }, 0)
      }
    }

    const reject = (reason) => {
      if (this.status !== 'pendding') return
      this.status = 'rejected'
      this.data = reason
      if (this.callbacks.length > 0) {
        setTimeout(() => {
          this.callbacks.forEach(cbObj => {
            cbObj['onRejected'](value)
          })
        }, 0)
      }
    }
    try {
      excutor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  
  Promise.prototype.then = function (onResolved, onRejected) {

    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

    return new Promise((resolve, reject) => {
      const handle = (callback) => {
        try {
          const res = callback(this.data)
          if (res instanceof Promise) {
            // res.then(value => resolve(value), err => reject(err))
            res.then(resolve, reject)
          } else {
            resolve(res)
          }
        } catch (error) {
          reject(error)
        }
      }
      // console.log(this.status)
      if (this.status === 'pendding') {
        this.callbacks.push({
          onResolved: (value) => {
            // onResolved(this.data)
            // onResolved(value)
            handle(onResolved)
          },
          onRejected: (reason) => {
            // onRejected(reason)
            handle(onRejected)
          }
        })
      } else if (this.status === 'resolved') {
        setTimeout(() => {
          handle(onResolved)
          // resolve(this.data)
        })
      } else {
        setTimeout(() => {
          handle(onRejected)
        });
      }
    })
  }

    Promise.prototype.catch = function (onRejected) {
      return this.then(undefined, onRejected)
    }

    Promise.resolve = function (value) {
      return new Promise(resolve => {
        resolve()
      })
    }

    Promise.rejected = function (reason) {
      return new Promise((_, reject) => {
        reject()
      })
    }

    Promise.all = function (promises) {
      let len = promises.length, index = 0, results = []
      return new Promise((resolve, reject) => {
        for(let i = 0; i < len; i++) {
          let item = promises[i]
          if(item instanceof Promise) {
            item.then(res => {
              results[i] = res
              index++
              if(index === len) {
                resolve(results)
              }
            }).catch(reason => {
              reject(reason)
            })
          } else {
            results[i] = item
            index++
            if(index === len) {
              resolve(results)
            }
          }
        }
      })
    }

    Promise.race = function (promises) {

    }
    window.Promise = Promise
  }(window)


function red() {
    console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

function light(cb, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb()
      resolve()
    }, timer);
  })
}

function change() {
  light(red, 3000).
    then(() => {
      return light(green, 2000)
    }).then(() => {
      return light(yellow, 2000)
    }).then(() => {
    change()
  })
}
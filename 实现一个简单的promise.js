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
!function(){
  function Promise(excutor) {
    this.status = 'pendding'
    this.data = undefined
    this.callbacks = [] //{onResloved:() => {}, onRejected:() => {}}
    // let _this = this
    const resolve = (value)  => {
      if(this.status !== 'pendding') return
      this.status = 'resolved'
      this.data = value
      if(this.callbacks.length > 0) {
        setTimeout(() => {
          this.callbacks.forEach(cbObj => {
            cbObj['onResolved'](value)
          })
        },0)
      }
    }

    const reject = (reason) => {
      if(this.status !== 'pendding') return
      this.status = 'rejected'
      this.data = reason
      if(this.callbacks.length > 0) {
        setTimeout(() => {
          this.callbacks.forEach(cbObj => {
            cbObj['onRejected'](value)
          })
        },0)
      }
    }
    try {
      excutor(resolve, reject)
    }catch(err) {
      reject(err)
    }
  }

  Promise.prototype.then = function(onResolved, onRejected) {
    return new Promise((resolve, reject) => {
      // console.log(this.status)
      if(this.status === 'pendding') {
        this.callbacks.push({onResolved, onRejected})
      } else if(this.status === 'resolved') {
        setTimeout(() => {
          try {
            const res = onResolved(this.data)
            if(res instanceof Promise) {
              // res.then(value => resolve(value), err => reject(err))
              res.then(resolve, reject)
            } else {
              resolve(res)
            }
          } catch (error) {
            reject(error)
          }
        })
      } else {
        setTimeout(() => {
          onRejected(this.data)
        })
      }
    })
  }


  Promise.prototype.catch = function(onRejected) {

  }

  Promise.resolve = function(value) {

  }

  Promise.rejected = function(reason) {

  }

  Promise.all = function(promises) {

  }

  Promise.race = function(promises) {

  }
  window.Promise = Promise
}(window)


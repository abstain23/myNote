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

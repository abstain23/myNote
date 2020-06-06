// const Promise = require('./promise')


let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hhh')
    })
})

let p2 = new Promise(r => {
  r('llll')
})

// p.then(() => {
//   return 11
// }).then(res => {
//   return new Promise(a => {
//     a(res+22)
//   })
// }).then(res => console.log(res), err=> console.log(err.message))

// let p2= p.then(() => {return p2})
// p2.then(res => {console.log('r',res)}, err => console.log(err))
Promise.race([p,2,p2,1]).then(res => console.log(res))
// function a(fn) {
//   fn && fn()
// }
// console.log(0)
// a(() => console.log(1))
// console.log(2)

/*
function something() {
  if(Date.now() % 2 ===1) {
    console.log('当前时间为记数～')
  } else {
    throw new Error('偶数')
  }
}

try {
  something()
} catch(err){
  console.log(err.message)
}
*/

// pending resolved rejected

let p1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    let random = Math.random()
    if(random > 0.5) {
      resolve(random)
    } else {
      reject(random)
    }
  },1000)
})
console.log(p1)

p1.then((value) => {
  console.log('resolve:'+ value)
}, (reason) => {
  console.log('reject：'+ reason)
})

// setTimeout(() => {
//   console.log(p1)
// },1100)

//promise.js

const fs = require('fs')

const read = function(fileName) {
  return new Promise((a,b) => {
    fs.readFile(fileName,(err,data) => {
      if(err){
        b(err)
      }else {
        a(data)
      }
    })
  })
}

// console.log('promise')
// read('1.txt').then(res => {
//   console.log(res.toString())
// }).then((data) => {
//   console.log(data)
//   setTimeout(() => {
//     return read('2.txt')
//   }, 2000); // 会报错，
// }).then((res) => {
//   console.log('22')
//   console.log(res.toString())
// })

console.log('async')

async function readFileByasync(){
  try {
  var a2 = await read('2.txt')
  var a1 = await read('1.txt')
  
  }catch(e){
    console.log(e)
  }
  console.log(a1.toString())
  console.log(a2.toString())
}

readFileByasync()
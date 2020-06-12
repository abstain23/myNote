function* mtGenerator() {
  console.log( yield Promise.resolve(1) )
  console.log(yield Promise.resolve(2))
  console.log(yield Promise.resolve(3))
}
const gen = mtGenerator()
// gen.next().value.then(res => {
//   console.log(res)
// })
// gen.next().value.then(res => {
//   console.log(res)
// })
// gen.next().value.then(res => {
//   console.log(res)
// })
// gen.next().value.then(val => {
//   gen.next(val).value.then(val => {
//     gen.next(val).value.then(val => {
//       gen.next(val)
//     })
//   })
// })

// =============================
/*
function run(gen) {
  var g = gen()
  function _next(val) {
    var res = g.next(val)
    if(res.done) return res.value
    res.value.then(val => {
      _next(val)
    })
  }
  _next()
}
*/
run(mtGenerator)

function run(gen) {
  return new Promise((resolve, reject) => {
    var g = gen()
    function _next(val) {
      try {
        var res = g.next(val)
      } catch (error) {
        return reject(error)
      }
      if(res.done) {
        return resolve(res.value)
      }
      Promise.resolve(res.value).then(val => {
        _next(val)
      }, err => {
        g.throw(err)
      })
    }
    _next()
  })
}

function* myGenerator() {
  try {
    console.log(yield Promise.resolve(1)) 
    console.log(yield 2)   //2
    console.log(yield Promise.reject('error'))
  } catch (error) {
    console.log(error)
  }
}

const result = run(myGenerator)     //result是一个Promise
//输出 1 2 error

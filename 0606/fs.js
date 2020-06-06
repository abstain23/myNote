const fs = require('fs')
let cc = {}

const after = (times, fn) => () => --times === 0 && fn()
let newA = after(2, ()=> {
  console.log(cc)
})

fs.readFile('name.txt', (err, data) => {
  cc['name'] = data.toString()
  newA()
})
fs.readFile('age.txt', (err, data) => {
  cc['age'] = data.toString()
  newA()
})
const fs = require('fs')
let cc = {}

let event = {
  arr:[],
  on(fn) {
    this.arr.push(fn)
  },
  emit() {
    this.arr.forEach(fn => fn())
  }
}

event.on(() => {
  console.log('订阅ok')
})

event.on(() => {
  // console.log(Object.keys(cc))
  // console.log(Object.keys(cc))
  if(Object.keys(cc).length === 2) {
    console.log(cc)
  }
})

fs.readFile('name.txt', (err, data) => {
  cc['name'] = data.toString()
  event.emit()
})
fs.readFile('age.txt', (err, data) => {
  cc['age'] = data.toString()
  event.emit()
})
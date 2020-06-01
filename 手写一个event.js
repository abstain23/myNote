class Event {
  constructor() {
    this._event = {}
  }
  on(type, cb) {
    if(!this._event[type]) {
      this._event[type] = []
    }
    if(typeof cb === 'function') {
      // console.log(cb.name)
      const index = this._event[type].findIndex(item => item.name && item.name === cb.name)
      // console.log(index)
      if(index >= 0) {
        this._event[type].splice(index, 1)
      }
      this._event[type].push(cb)
    }
  }
  off(type, cb) {
    if(!this._event[type]) return
    const index = this._event[type].findIndex(item => item.name && item.name === cb.name)
    if(index >= 0) {
      this._event[type].splice(index, 1)
    }
  }
  emit(type, ...args) {
    if(!this._event[type]) return
    this._event[type].forEach(cb => {
      cb(...args)
    })
  }
}

let e = new Event()
const fn = (...data) => {
  console.log(data)
}
e.on('click', fn)
e.on('click', fn)
e.on('click', fn)
e.on('click', (e) => {console.log(e)})
e.on('click', () => {console.log(2)})
// e.off('click', fn)
// e.off('click', () => {console.log(1)})
console.log(e)
e.emit('click', 1111, 11)
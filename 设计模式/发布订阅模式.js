class EventBus {
  constructor() {
    this.events = {}
  }

  on(key,cb) {
    if(!this.events[key]) {
      this.events[key] = []
    }
    this.events[key].push(cb)
  }

  emit(key,...args) {
    this.events[key] && this.events[key].forEach(cb => {
      // cb.call(this,...args)
      console.log('emit')
      // console.log(cb())
      // cb(...args)
      cb.call(this,...args)
    })
  }

  off(key, cb) {
    let index = this.events[key]&&this.events[key].findIndex(item => cb === item)
    if(index !== -1) {
      this.events[key].splice(index,1)
    }
  }
}


let ev = new EventBus()

function f1(m,n) {
  console.log('f1',m,n)
}

function f2(a,b) {
  console.log('f2', a,b)
}
function f3() {
  console.log('f3')
}
function f4() {
  console.log('f4')
}
ev.on('f1',f1)
ev.on('f2',f2)
ev.on('f3',f3)
ev.on('f4',f4)
// console.log(ev.events)
ev.emit('f1',1,2)
ev.emit('f2',f2)
ev.emit('f3',f3)
ev.emit('f4',f4)
ev.off('f1',f1)
ev.emit('f3',f3)
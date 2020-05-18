class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
  addObserver(observer) {
    this.observers.push(observer)
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.addObserver(this)
  }
  update() {
    console.log(`${this.name}update,state:${this.subject.getState()}`)
  }
}

let sub = new Subject()
let o1 = new Observer('o1',sub)
let o2 = new Observer('o2',sub)

sub.setState('更新')

//一对多，多个观察者对应一个主题对象，当这个主题对象的状态更新的时候，就会通知所有的观察者对象
// vue的响应式，Dom事件
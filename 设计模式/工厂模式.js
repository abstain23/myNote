class Person {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}

class Factory {
  static create() {
    return new Person('cc')
  }
}

// 工厂模式起到的作用就是替我们隐藏了一堆复杂的处理逻辑，我们只需要调用一个方法或者函数就能实现功能
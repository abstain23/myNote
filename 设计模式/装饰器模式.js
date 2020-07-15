// es7 装饰器语法

function readonly(target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Test {
  @readonly
  name = 'cc'
}

let t = new Test()
t.name = 'xxx'

// 例如react中的 react-redux中的 connect
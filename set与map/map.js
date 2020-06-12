// map解决了js对象的键只能是字符串的问题
const m = new Map()
const o = { name: 'object' }
m.set(o, 1)
m.get(o)

console.log(m.has(o))
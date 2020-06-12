// Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

// let set = new Set()
// let a = NaN
// let b = NaN
// set.add(a).add(b).add(1)
// console.log(set)
// console.log(set.size)
// console.log(set.keys())
// console.log(set.values())


// 数组并集
let arr = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 78, 9]
console.log([...new Set([...arr, ...arr2])])

// 数组交集
console.log(arr.filter(item => new Set(arr2).has(item)))

// WeakSet 只能存放对象
const ws = new WeakSet()
ws.add({ a: 1 })
console.log(ws)
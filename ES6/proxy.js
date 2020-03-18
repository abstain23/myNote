// @ts-nocheck
// var proxy = new Proxy({}, {
//   get(target, propKey){
//     return 35
//   }
// })

// var obj = {
//   a: 1,
//   b: 2
// }

// const data = new Proxy(obj, {
//   get(target, key, weizhi){
//     console.log(target, key, weizhi)
//     return target[key]
//   },
//   set(target,)
// })

var obj = new Proxy({}, {
  get(target, key, obj) {
    console.log(target)
    console.log(key)
    console.log(obj)
    // return target[key]
    return Reflect.get(target, key)
  },
  set(target, key, val, obj) {
    console.log(target)
    console.log(key)
    console.log(val)
    console.log(obj)
    target[key] = val
  }
})
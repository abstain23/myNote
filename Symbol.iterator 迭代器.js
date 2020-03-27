let obj = {
  a: 1,
  b: 2
}
console.log(...obj) //Found non-callable @@iterator Object身上没有Symbol.iterator

for(let v of obj) {
  console.log(v) //同上都会报错
}
//Array身上天生具备Symbol.iterator
let arr = [1,2,3,4];
console.log([...arr]);//(4) [1, 2, 3, 4]
//实现一个

let obj2 = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: function() {
    let index = 0
    let next = () => {
      return {
        value: this[index],
        done: this.length === index++
      }
    }
    return {
      next
    }
  }
}
console.log([...obj2])
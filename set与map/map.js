// map解决了js对象的键只能是字符串的问题
const m = new Map()
const o = { name: 'object' }
m.set(o, 1)
m.get(o)

console.log(m.has(o))


// WeakMap 只接受对象作为键名
// WeakMap 的键名所引用的对象是弱引用  弱引用就是能够被垃圾回收的引用


const privateData = new WeakMap();

class Person {
    constructor(name, age) {
        privateData.set(this, { name: name, age: age });
    }

    getName() {
        return privateData.get(this).name;
    }

    getAge() {
        return privateData.get(this).age;
    }
}

export default Person;
var common = require('./commonjs')
console.log(common.counter)
console.log(common.obj)
common.addConunt()
console.log(common.counter)
console.log(common.obj)
/**
 * CommonJS模块输出的是一个值的拷贝，ES6 模块输出的是值的引用；
 * CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
 * 
 * 
 * CommonJS模块规范使用require语句导入模块，module.exports导出模块，输出的是值的拷贝，模块导入的也是输出值的拷贝，也就是说，一旦输出这个值，这个值在模块内部的变化是监听不到的。
 * 
 * 
 * ES6模块的规范是使用import语句导入模块，export语句导出模块，输出的是对值的引用。ES6模块的运行机制和CommonJS不一样，遇到模块加载命令import时不去执行这个模块，只会生成一个动态的只读引用，等真的需要用到这个值时，再到模块中取值，也就是说原始值变了，那输入值也会发生变化。
 */

//  import {counter, addCount} from './es6.mjs'
//  console.log(counter)
//  addCount()
//  console.log(counter)
 // node  --experimental-modules index.mjs
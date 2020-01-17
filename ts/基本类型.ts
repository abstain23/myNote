//ts的原属数据类型

//布尔值

let isDone: boolean = false

let tt = new Boolean(1);

// number
let num: number = 5

// 字符串
let myName: string = 'yyyy'
let myAge: number = 20

//模版字符串

let tesrString: string = `my name is ${myName}
i am ${myAge} years old
`

//空值 

function cc(): void { //用 void 表示没有任何返回值的函数：
  console.log('my name is yyy')
}

//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null

let uuu: void = null
let xxx: void = undefined

//null undefined

//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：

let u: undefined = undefined
let n: null = null


//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：


let nummm: number = undefined
let nnnnn: number = null
//let nnnn: undefined = 11 报错

let v: void
// let num: number = v 会报错
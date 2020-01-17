// 定义方式

// 「类型 + 方括号」表示法

let arr: Number[] = [1, 1, 3, '4'] //Type 'string' is not assignable to type 'Number'.

//必须是number类型

arr.push('8') //Argument of type '"8"' is not assignable to parameter of type 'Number'

// 数组泛型

let arr2: Array<number> = [1, 1, 2, 3, 5]

// 用接口表示数组

interface NumberArray {
  [index: Number]: number
}

let arr3: NumberArray = [1,2,3,4]

//NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。

// 类数组

function sum() {
  let args: {
      [index: number]: number;
      length: number;
      callee: Function;
  } = arguments;
}

function sum() {
  let args: IArguments = arguments;
}

//any的应用

let list: any[] = ['1',2, {}]
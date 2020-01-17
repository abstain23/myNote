//函数声明

function sum(x: number, y:number): number {
  return x + y
}

//输入多余的（或者少于要求的）参数，是不被允许的：

let mySum = function (x: number, y: number): number {
  return x + y;
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}

//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

//用接口定义函数的形状

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

//可选参数
// 与接口中的可选属性类似，我们用 ? 表示可选的参数
// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
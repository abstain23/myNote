let xx: string = 'string'

xx = 'xx' 
// xx = 5 报错，不能改变类型

let aaa: any = 'any'
aaa = 5 //ok

let anyThing: any = 'hello'

console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

//可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

let something //变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

something = '122'
something = 11
//在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

interface Person2 {
  name: string
  age: number
}

const tom:Person2 ={
  name:'tom',
  age: 15
}

// const ttt:Person2 = {
//   name: 'xx' //缺失一个属性，多一个属性都会报错
// }

//可选属性

interface Person3 {
  name: string
  age?: number //加个问号表示可选类型
}

const ttttt:Person3 = {
  name:'xxx' ,//少一个属性也不会报错
}

//任意属性

interface Person4 {
  name: string
  age?: number
  [propName:string]: any //一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
}

let sss:Person4 = {
  name: 'dadad'
}

//只读属性

interface Person5 {
  readonly id: number;
  readonly name: string;
  age?: number;
  [propName: string]: any;
}

let tomdsds: Person5 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tomdsds.id = 123 //报错


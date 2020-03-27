// 两种特殊类型：数组(array)、对象(object)
// 四种基础类型：字符串(string)、数字(number)、布尔型(boolean)、NULL值

var obj = {
  a: 1,
  b:2,
  c: {
    cc: 20
  },
  d: [0,1,2],
  f: undefined, //json中没有undefined 所以这个属性被忽略
  e: null,
  g: function(){}, //同理没有function
  h: /cc/
}

var obj2 = obj

obj2.a = 3
obj.c.cc = 33
console.log(obj, obj2)//{a: 3, b: 2, c: {cc:33} {a: 3, b: 2, c: {cc:33} 
obj.d[0] = 9
console.log(obj, obj2) //[9,1,2] [9,1,2] 

var obj3 = JSON.parse(JSON.stringify(obj))
obj3.a = 4
obj3.c.cc = 44
console.log(obj, obj3) //{a: 3, b: 2, c: {cc:33}} {a: 4, b: 2, c:{cc:44} }
obj3.d[1] = 99
// [9, 1, 2] [9, 99, 2]
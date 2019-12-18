// 属性描述符必须是数据描述符或者存取描述符两种形式之一，不能同时是两者

Object.defineProperty({}, "num", {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
});


var value = 1;
Object.defineProperty({}, "num", {
    get : function(){
      return value;
    },
    set : function(newValue){
      value = newValue;
    },
    enumerable : true,
    configurable : true
});


// Object.defineProperty({}, "num", {
//   value: 1,
//   get: function() {
//       return 1;
//   }
// });  报错

function Test() {
  var name = null
  var names = []

  Object.defineProperty(this,'name', {
    get(){
      console.log('get操作')
      return name
    },
    set(newValue){
      console.log('set操作')
      name = newValue
      names.push({name: name})
    }
  })
  this.getName = function(){
    return names
  }
}

var tt = new Test()

tt.name
tt.name = 'yy'
tt.name = 'zz'
tt.getName()


var obj = {
  value: 1
}


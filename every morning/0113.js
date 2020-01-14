var x = 3, //12
obj = {
  x:5
};
obj.fn = (function () {
  this.x *= ++x     //12
  return function (y) {
    this.x *= (++x) + y //
    console.log(x) //13
  }
})()

var fn = obj.fn
obj.fn(6) // 13
fn(4) //234
console.log(obj.x, x) //95  234

//g: x 13  o:x 95 
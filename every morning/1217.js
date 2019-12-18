function a() {
  console.log(1)
}
(function f(b){
  a()
  a = function() {
    console.log(2)
  }
  function a(){
    console.log(3)
  }
  a()
  var a
  a && a()
  b()
})(a)
//3 2 2 1
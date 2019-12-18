var arr = [1,2,1,'1','2','2'];

/* 双层for循环
function unique(array) {
  var res = []
  var arrlen = array.length

  for(var i=0;i<arrlen;i++){
    for(var j=0, reslen = res.length; j<reslen;j++){
      if(array[i] === res[j]){
        break
      }
    }
    if(j === reslen){
      res.push(array[i])
    }
  }
  return res
}
*/

//indexof

/*
function unique(array) {
  var res = [],arrlen = array.length
  for(var i=0;i<arrlen;i++){
    if(res.indexOf(array[i]) === -1){
      res.push(array[i])
    }
  }
  return res
}
*/

//排序后去重

/*
function unique(array) {
  var res = []
  var sortedArr = array.sort()
  var len = sortedArr.length
  var pre 
  for(var i=0; i<len;i++){
    if(!i || pre !== sortedArr[i]){
      res.push(sortedArr[i])
    }
    pre = sortedArr[i]
  }
  return res
}
*/


// filter

/*
function unique(array) {
  return array.filter((item,index,array) => {
    return array.indexOf(item) === index
  })
}
*/

//es6最简单

let unique = (a) => [...new Set(a)]
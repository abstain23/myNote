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

// let unique = (a) => [...new Set(a)]
var arr = [1, 1, '1', '1']

function unique(arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    // if (!(arr[i] in temp)) {
    //   temp[arr[i]] = arr[i]
    //   res[j++] = arr[i]
    // }
    // for (var j = 0; j < res.length; j++) {
    //   if (arr[i] === res[j]) {
    //     break
    //   }
    // }
    // if (j === res.length) {
    //   res.push(arr[i])
    // }
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}

function unique2(arr) {
  var res = [], len = arr.length
  var sortedArr = arr.concat().sort()
  var seen
  for (var i = 0; i < len; i++) {
    if (!i || seen !== sortedArr[i]) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i]
  }
  return res
}

function unique3(arr) {
  var _set = {}, res = []
  for (let i = 0; i < arr.length; i++) {
    let key = typeof arr[i] + arr[i]
    _set[key] || (_set[key] = true, res.push(arr[i]))
  }
  return res
}
console.log(unique3(arr))

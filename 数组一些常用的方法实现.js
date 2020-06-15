Array.prototype.forEach = function (cb, context = undefined) {
  let arr = this.slice()
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      cb.call(context, arr[i], i, arr)
    }
  }
}

Array.prototype.push = function () {
  for(let i = 0; i< arguments.length; i++) {
    this[this.length] = arguments[i]
  }
  return this.length
}

Array.prototype.pop = function(){
  let len = this.length
  if(len === 0) return
  let value = this[this.length - 1]
  this.length -= 1
  return value
}

Array.prototype.shift = function() {
  let len = this.length
  if(len === 0) return
  let value = this[0]
  var newArr = []
  for(let i = 1; i<len; i++) {
    newArr.push(this[i])
  }
  this = newArr
  return value
}

Array.prototype.map = function (cb, context = undefined) {
  let arr = this.slice()
  let len = arr.length
  let res = []
  for (let i = 0; i < len; i++) {
    res[i] = cb.call(context, arr[i], i, arr)
  }
  return res
}


Array.prototype.myReduce = function (cb, initData) {
  let arr = this, len = arr.length
  let res = initData || arr[0]
  let startIndex = initData ? 0 : 1
  for (let i = startIndex; i < len; i++) {
    res = cb(res, arr[i], i, arr)
  }
  return res
}

Array.prototype.mapByReduce = function (cb, context = null) {
  return arr.reduce((pre, curr, index, arr) => {
    let res = cb.call(context, curr, index, arr)
    return [...pre, res]
  },[])
}

Array.prototype.filter = function (cb, context=undefined) {
  let arr = this.slice()
  let len = arr.length
  let res = [], newIndex=0
  for (let i = 0; i < len; i++) {
    let flag = cb.call(context, arr[i], i, arr)
    if (flag) {
      console.log(i, flag)
      res[newIndex++] = arr[i] 
    }
  }
  return res
}


Array.prototype.find = function (cb, context) {
  let arr = this.slice()
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let res = cb.call(context, arr[i], i, arr)
    if(res) return arr[i]
  }
}


Array.prototype.push = function() {
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

Array.prototype.unshift = 
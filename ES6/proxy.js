// @ts-nocheck
var proxy = new Proxy({}, {
  get(target, propKey){
    return 35
  }
})


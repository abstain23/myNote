function _type(value) {
  return Object.toString.call(value).slice(8,-1).toLocaleLowerCase()
}

function deepclone(obj) {
  if(obj === null) return null
  if(typeof obj !== 'object') return obj
  if(_type(obj) === 'regexp') return new RegExp(obj)
  if(_type(obj) === 'date') return new Date(obj)
  const newObj = new obj.constructor
  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      let item = obj[key]
      newObj[key] = deepclone(item)
    }
  }
  return newObj
}

function deepclone2(obj) {
  if(typeof obj !== 'object' || obj === null) return
  let newObj = new obj.constructor
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      let item = obj[key],itemType = _type(item)
      if(item !== null && typeof item === 'object') {
        if(/(regexp|date)/.test(itemType)) {
          newObj[key] = new item.constructor(item)
          continue
        }
        newObj[key] = deepclone2(item)
        continue
      }
      newObj[key] = item
    }
    return newObj
  }
}

// 1 7 6 8 2 4 3 5 9 11 10 12 script end

// script start async2 end Promise async1 end promise1 promise2 setTimeout

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (regis) {
        console.log('ok')
    }, function (err) { console.log('err', err) })
  })
}
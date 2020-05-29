const input2 = document.getElementById('input2')

input2.addEventListener('keyup', debounce(ajax2, 1000)) 

function ajax2(e) {
  console.log(e.target.value)
  console.log(this)
  console.log('ajax 请求')
}

function throttle(fn, delay) {
  let timer
  return function(...args) {
    if(timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

function throttle2(fn, delay) {
  let pre = 0
  return function (...args) {
    let now = new Date()
    if(now - pre > delay) {
      fn.apply(this, ...args)
      pre = now
    }
  }
}
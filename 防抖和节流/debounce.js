const input = document.getElementById('input')

input.addEventListener('keyup', debounce(ajax, 300)) 


function ajax(e) {
  console.log(e.target.value)
  console.log(this)
  console.log('ajax 请求')
}

function debounce(fn,delay) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
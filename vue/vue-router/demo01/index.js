// console.log(window.location.hash)
let url = window.location.hash.substring(1)
url = url || 1
// console.log(url)
let div = document.getElementById(`div${url}`)
// console.log(div)
const app = document.getElementById('app')
console.log(app)
if (div) {
  app.appendChild(div)
  div.style.display = 'block'
} else {
  div = document.getElementById('div404')
  div.style.display = 'block'
}

window.addEventListener('hashchange', (e) => {
  console.log('hash改变了')
  url = window.location.hash.substring(1)
  div = document.getElementById(`div${url}`)
  // console.log(app.children)
  if (div) {
    let oldDIv = app.children[0]
    oldDIv.style.display = 'none'
    document.body.appendChild(oldDIv)
    app.appendChild(div)
    div.style.display = 'block'
  }else {
    div = document.getElementById('div404')
    div.style.display = 'block'
  }
})
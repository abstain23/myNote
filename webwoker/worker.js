// Worker 线程
// onmessage = function (e) {
//   if (e.data.length > 1) {
//       postMessage(e.data[1] - e.data[0])
//   }
// }

this.addEventListener('message', (e) => {
  if (e.data.length) {
    postMessage(e.data)
  }
})
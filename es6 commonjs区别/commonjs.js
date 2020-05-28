var counter = 3
var obj = {a:1}

function addConunt() {
  counter ++
  // console.log(counter)
  obj.a ++
}

module.exports = {
  counter,
  addConunt,
 obj
}
console.log('common')
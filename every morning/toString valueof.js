const obj = {
  valueOf(){
    return 'valueOf'
  },
  toSting(){
    return 'toString'
  }
}

console.log(1+obj)
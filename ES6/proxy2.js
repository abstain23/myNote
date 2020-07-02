let nums = [1, 2, 4]

nums = new Proxy(nums, {
  get(target, prop) {
    if (prop in target) {
      return target[prop]
    } else {
      return 0
    }
  }
})

console.log(nums[1])
console.log(nums[22])



// fo / 16 = win/width
// 640/16 = 40
//   414/640 * 16 = 10.35px
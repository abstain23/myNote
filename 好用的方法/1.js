
// 判断类型
const isType = (type) => (target) => `[object ${type}]` === Object.prototype.toString.call(target)
const isArray = isType('Array')
const isPureObject = isType('Object')

console.log(isArray([]))

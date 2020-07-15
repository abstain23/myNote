class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    this.stack.pop()
  }
  peek() {
    return this.stack[this.getLength() - 1]
  }

  getLength() {
    return this.stack.length
  }
  isEmpty() {
    return this.getLength() === 0
  }
}

/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
 */

var isValid = function (s) {
  const map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
  }
  const len = s.length
  const stack = []
  for (let i = 0; i < len; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i])
    } else {
      let last = stack.pop()
      if(map[last] + map[s[i]] !== 0) return false
    }
  }
  if (stack.length > 0) return false
  return true
 }
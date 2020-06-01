!function(win, doc) {
  class Delegator {
    constructor(selector) {
      this.root = doc.querySelector(selector)
      this.events = {}
    }
    on(event, target, fn) {
      if(!this.events[event]) {
        this.events[event] = []
      }
      this.events[event].push({
        target,
        cb:fn
      })
      this.root.addEventListener(event, this._delegate)
      return this
    }
    _delegate(e) {
      let target = e.target || e.srcElement
      let currentTarget = e.currentTarget
      while(target !== currentTarget) {
        this.eventsObj[e.type].forEach(item => {
          //查找订阅事件者
          if(target.matches(item.selector)){
              //执行订阅事件者携带的函数
              item.callback.call(target,e);
          }
      });
      //往上冒泡
      target = target.parentNode;
      }
    }
  }
}(window, document)


function delegate(element, eventType, selector, fn) {
  element.addEventListener(eventType, (e) => {
    let el = e.target;
    while (!el.matches(selector)) {
      if (element === el) {
        el = null;
        break;
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el);
  });
  return element;
}
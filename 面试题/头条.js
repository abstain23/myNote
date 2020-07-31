/*
class Manager {
    constructor(max) {
      this.max = max;
    }
  
    add(fn) { // fn: () => Promise<any>
  
    }
  }
  
  
  const wrapper = (str, time) => {
    return () => {
          return new Promise(res => {
              setTimeout(() => {
                  console.log(str);
  
                  res();
              }, time)
          })
  
    }
  }
  
  const m = new Manager(2);
  
  m.add(wrapper('a', 1000));
  m.add(wrapper('b', 500));
  m.add(wrapper('c', 300));
  
  0  start
  500  b
  800  c
  1000  a
  */


  class Manager {
      constructor(max) {
        this.max = max
        this.cbs = []
        this.queen = []
      }
      add(fn) {
        if(this.cbs.length < this.max) {
            this.cbs.push(fn)
            fn().then(res => {
                let index = this.cbs.indexOf(fn)
                this.cbs.splice(index, 1)
                if(this.queen.length > 0) {
                    this.add(this.queen.shift())
                }
            })
        } else {
            this.queen.push(fn)
        }
      } 
  }

  const wrapper = (str, time) => {
    return () => {
          return new Promise(res => {
              setTimeout(() => {
                  console.log(str);
  
                  res();
              }, time)
          })
  
    }
  }

  const m = new Manager(2);
  
  m.add(wrapper('a', 1000));
  m.add(wrapper('b', 500));
  m.add(wrapper('c', 300));
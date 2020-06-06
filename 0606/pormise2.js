class MyPromise {
  constructor(executor) {
      // 初始属性值
      this.status = 'pending';
      this.value = undefined;
      this.resolvedArr = [];
      this.rejectedArr = [];

      // 改变状态的函数
      let changeStatus = (status, result) => {
          if (this.status !== 'pending') return;
          this.status = status;
          this.value = result;
          let arr = status === 'rejected' ? this.rejectedArr : this.resolvedArr;
          arr.forEach(item => (typeof item === 'function' ? item(this.value) : null));
      };
      let resolve = result => {
          if (this.resolvedArr.length > 0) {
              changeStatus('resolved', result);
              return;
          }
          let delayTimer = setTimeout(() => {
              clearTimeout(delayTimer);
              changeStatus('resolved', result);
          }, 0);
      };
      let reject = reason => {
          if (this.rejectedArr.length > 0) {
              changeStatus('rejected', reason);
              return;
          }
          let delayTimer = setTimeout(() => {
              clearTimeout(delayTimer);
              changeStatus('rejected', reason);
          }, 0);
      };

      // 异常捕获处理
      try {
          executor(resolve, reject);
      } catch (error) {
          reject(error);
      }
  }

  then(resolvedFn, rejectedFn) {
      if (typeof resolvedFn !== 'function') {
          resolvedFn = result => {
              return result;
          };
      }
      if (typeof rejectedFn !== 'function') {
          rejectedFn = reason => {
              // throw new Error(reason);
              return new MyPromise((resolve, reject) => {
                  reject(reason);
              });
          };
      }

      // then链：返回一个新的Promise实例
      return new MyPromise((resolve, reject) => {
          this.resolvedArr.push(() => {
              try {
                  let x = resolvedFn(this.value);
                  x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
              } catch (error) {
                  reject(error);
              }
          });
          this.rejectedArr.push(() => {
              try {
                  let x = rejectedFn(this.value);
                  x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
              } catch (error) {
                  reject(error);
              }
          });
      });
  }

  catch (rejectedFn) {
      // catch(rejectedFn) === then(null,rejectedFn)
      return this.then(null, rejectedFn);
  }

  /* 静态方法 */
  static resolve(result) {
      return new MyPromise(resolve => {
          resolve(result);
      });
  }

  static reject(reason) {
      return new MyPromise((_, reject) => {
          reject(reason);
      });
  }

  static all(arr) {
      return new MyPromise((resolve, reject) => {
          let index = 0,
              results = [];
          for (let i = 0; i < arr.length; i++) {
              let item = arr[i];
              if (!(item instanceof MyPromise)) continue;
              item.then(result => {
                  index++;
                  results[i] = result;
                  if (index === arr.length) {
                      resolve(results);
                  }
              }).catch(reason => {
                  // 只要有一个失败，整体就是失败
                  reject(reason);
              });
          }
      });
  }
}
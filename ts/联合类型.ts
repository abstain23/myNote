let mmmm: number | string

mmmm = 'xx'
mmmm = 1
//mmm = true 报错

function xxx(): string { //返回值必须为字符串
  return 'xxx'
}

function yyy(mmmms:number|string):string {
  // return mmmms.length  //报错 
  return mmmms.toString()
}

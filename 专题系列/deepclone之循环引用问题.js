function deepClone(obj, map = new Map()) {
    if(!obj || typeof obj !== 'object') return obj
    if(map.get(obj)) {
        return map.get(obj)
    }
    let res = Array.isArray(obj) ? [] : {}
    map.set(obj, res)
    let keys = Object.keys(obj)
    let key, temp
    for(let i = 0, len = keys.length; i < len; i++) {
        key = keys[i]
        temp = obj[key] 
        res[key] = deepClone(temp, map)
    }
    return res
}
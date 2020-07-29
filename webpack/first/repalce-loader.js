const loaderUtils = require('loader-utils')

module.exports = function(source) {
    const options = loaderUtils.getOptions(this)
    console.log('options', options)
    const result = source.replace('call', options.name)
    console.log('source', result)
    return result
}
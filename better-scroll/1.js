const CryptoJS = require('crypto-js')
const fs = require('fs')

const data = 'RzRaVE9PSldJVTNUSU4yQ0dNMkRHTUpXSVkzVENNWlpHTVlUR01aVEc0WkVJTlNGRzRaREdOQlRHVVpFSU1aVUc0WURNUkpUSEFaRUlNWlpHTTRUT01CVEdVWkVJTlpTRzRZVEdOUlRHRVpURU1aVkdNWVRHTVpUR1VaVFFOWlRHTTRET1JBPQ'
let baseResult=CryptoJS.enc.Base64.parse(data)
// var parsedWordArray = cr.enc.Base64.parse(data);
var parsedStr = baseResult.toString(CryptoJS.enc.Utf8);
console.log("parsed:",parsedStr);
// console.log(baseResult)
// fs.writeFile('./1.txt', baseResult, (err) => {
//   if(err) {
//     console.log(err)
//   }
// })

// var test = CryptoJS.enc.Base64.parse("1ffffffff5a8ae57");
// console.log(CryptoJS.enc.Base64.stringify(test));
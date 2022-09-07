var random = require('generate-password')
var pass = random.generate({
    length: 5,
    numbers: true,
    uppercase: true
})
console.log(pass)
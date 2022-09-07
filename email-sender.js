var nodemail = require('nodemailer')
var via = nodemail.createTransport({
    service: 'gmail',
    auth: {
        user: 'Put your mail',
        pass: 'Put your password'
    }
})

var options = {
    from: 'Put your mail',
    to: 'Put receiver mail',
    subject: 'Try Node',
    text: 'Done'
}

via.sendMail(options, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log("Email sent" + info.response)
    }
})
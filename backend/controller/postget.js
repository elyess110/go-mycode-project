const tiket = require('./controller')
const pdf = require('html-pdf');

module.exports={
    createpdf:((req, res) => {
        console.log(req.body)

        pdf.create(tiket(req.body , {})).toFile('./controller/result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        })
    }),
    fetchpdf : (req, res) => {
            res.sendFile(`${__dirname}/result.pdf`)
}
}
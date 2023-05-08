const tiket = require('./controller')
const pdf = require('html-pdf');
const users =require('../model/model')

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
},
   postseat : async(req,res)=>{
    try {
        const seat=new users(req.body)
        await seat.save()
        res.status(200).send({msg:"ok",seat})
    } catch (error) {
        res.status(500).send(error)
    }
},
     getseat :async(req,res)=>{
    try {
        const seat=await users.find()
        res.status(200).send({msg:"ok",seat})
    } catch (error) {
        res.status(500).send(error)
    }
}
}
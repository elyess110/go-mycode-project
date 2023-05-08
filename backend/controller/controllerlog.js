const bcrypt = require("bcrypt")
const users = require('../model/model')
const jwt = require('jsonwebtoken')

exports.Register=async(req,res)=>{
    const {email,password} = req.body
    try {
        const found = await users.findOne({email})
        if(found){
            res.staus(400).sond({errors:[{msg:"email exist"}]})
        }else{
            const user = new users(req.body)
            const salt = 10
            const hashPassword = bcrypt.hashSync(password,salt)
            user.password=hashPassword
            const payload={id:user._id} 
            const token = jwt.sign(payload,"hello samir")
            await user.save()
            res.status(200).send({msg : "ok",user,token})
        }
    } catch (error) {
        res.status(500).send("not work")
    }
}
exports.Login = async(req,res)=>{
    const {email,password} = req.body
 try {
    const user = await users.findOne({email})
    if(!user){
        res.staus(400).sond({errors:[{msg:"user not exist"}]})
    }else{
        const match = bcrypt.compareSync(password,user.password)
        if(!match){
            res.status(400).send({errors:[{msg:"wrong password"}]})
        }else{
            const payload={id:user._id} 
            const token = jwt.sign(payload,"hello samir")
        res.status(200).send({msg : "ok",user,token})
        }
    }
 } catch (error) {
    res.status(500).send("not work")
 }
}
exports.getall = async(req,res)=>{
    try {
        const user=await users.find()
        res.status(200).send({msg:"ok",user})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.deleteuser = async(req,res)=>{
    try {
        const user=await users.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"ok",user})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.update = async(req,res)=>{
    try {
        const user=await users.findByIdAndUpdate(req.params.id ,{$set:req.body},{new:true})
        res.status(200).send({msg:"ok",user})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.updimg = async(req,res)=>{
    try {
        const user=await users.findByIdAndUpdate(req.params.id ,{$set:req.body},{new:true})
        res.status(200).send({msg:"ok",user})
    } catch (error) {
        res.status(500).send(error)
    }
}

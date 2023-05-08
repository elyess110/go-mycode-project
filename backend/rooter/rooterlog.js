const express = require('express')
const {Register, Login,update,getall,deleteuser,updimg } = require("../controller/controllerlog")
const { isAuth } = require("../middlewer/isAuth")
const { registervalidation, validation, loginvalidation } = require("../middlewer/validation")
const userRooter = express.Router()

userRooter.post("/api/reg",registervalidation,validation,Register)
userRooter.post("/api/login",loginvalidation,validation,Login)
userRooter.get('/api/get',isAuth,(req,res)=>{
   res.send({user:req.user}) ; 
})
userRooter.put('/api/update/:id',update)
userRooter.get('/api/getuser',getall)
userRooter.delete('/api/delete/:id',deleteuser)
userRooter.put('/api/updimg/:id',updimg)

module.exports=userRooter